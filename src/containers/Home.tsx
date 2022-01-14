
import { useEffect, useState } from "react"
import CountriesList from "../components/CountriesList"
import DetailsModal from "../components/DetailsModal"
import { PaginationComponent } from "../components/PaginationComponent"
import Search from "../components/Search/Search"
import { useCountriesValues } from "../context/Countries.context"
import { Country } from "../shared/Country"


const Home = () => {

    const { nrOfPages, countries, countriesInPage } = useCountriesValues()

    const [currPage, setCurrPage] = useState<number>(1)
    const [countriesList, setCountriesList] = useState<Country[]>([]);
    const [showDetailsModal, setShowDetailsModal] = useState<boolean>(false)
    const [country, setCountry] = useState<Country>({} as Country)
    const [hidePagination, setHidePagination] = useState<boolean>(false)

    useEffect(() => {
         resetCountriesList()
    }, [countries])

    const handleCountries = (countriesSelected: Country[]) => {
        setCountriesList(countriesSelected) 
        countriesSelected && countriesSelected.length > countriesInPage ? setHidePagination(true) : setHidePagination(false)
    }

    const resetCountriesList = () => {
        setCountriesList(countries.slice((currPage-1)*countriesInPage, currPage*countriesInPage))
        setHidePagination(false)
    }

    const handleClose = () => {
        setShowDetailsModal(false)
    }

    const openDetailsModal = (country: Country) => {
        setCountry(country)
        setShowDetailsModal(true)
    }

    const goToPage = (page: number) => {
       setCountriesList(countries.slice((page-1)*countriesInPage, (page)*countriesInPage))
       setCurrPage(page)
    }

    return (
        <>
            <DetailsModal show={showDetailsModal} country={country} handleClose={handleClose}/>
            <Search handleCountries={handleCountries} placeholder={'Search Countries'} byRegion={false} reset={resetCountriesList}/>
            <Search handleCountries={handleCountries} placeholder={'Filter by region'} byRegion={true} reset={resetCountriesList}/>
            <CountriesList countries={countriesList} open={openDetailsModal}/>
            {!hidePagination && <PaginationComponent nrOfPages={nrOfPages} goToPage={goToPage} currPage={currPage}/>}
        </>
    )
}


export default Home

