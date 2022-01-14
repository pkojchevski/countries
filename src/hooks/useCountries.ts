
import React, { useEffect, useState } from "react";
import instance from "../shared/axios-rest";
import { uniq } from '../utils/utils'

const useCountries = () => {
  const [countries, setCountries] = useState<[]>([]);
  const [countriesInPage, setCountriesInPage] = useState<number>(10)
  const [nrOfPages, setNrOfPages] = useState<number>(0)
  const [nrOfCountries, setNrOfCountries] = useState<number>(0)
  const [regions, setRegions] = useState<string[]>([])

  const fetchCountries = React.useCallback(async () => {
    let response =  await instance.get('')
    setNrOfPages(Math.ceil(response.data.length/countriesInPage))
    setNrOfCountries(response.data.length)
    setCountries(response.data.map((data: any) => ({
        region: data.region,
        name: data.name.common,
        capital: data.capital,
        maps: data.maps,
        population: data.population,
        latlng: data.latlng,
        flags: data.flags})
         ))
    setRegions(uniq(response.data.map((c: any) => c.region)))
  }, [])

  useEffect(() => {
    
    fetchCountries()
    
  }, [fetchCountries]);

  return {
      countries,
      countriesInPage,
      nrOfPages,
      nrOfCountries,
      regions
  };
};

export default useCountries;