import React, { ReactChild, ReactChildren } from "react";

import {useCountries} from '../hooks/index'

import { Country } from "../shared/Country";

interface AuxProps {
    children: ReactChild | ReactChildren;
  }

interface ContextProps {
    countries: Country[],
    nrOfCountries:number,
    nrOfPages: number,
    countriesInPage: number,
    regions: string[]
  }

  const defaultProps = {
    countries: [],
    nrOfCountries:0,
    nrOfPages: 0,
    countriesInPage: 0,
    regions: []
  }


export const CountriesContext = React.createContext<ContextProps>(defaultProps);

export const CountriesProvider = ({children}: AuxProps) => {
  const {countries,
    countriesInPage,
    nrOfPages,
    nrOfCountries, regions} = useCountries();

  return (
    <CountriesContext.Provider value = {{countries, nrOfCountries, nrOfPages, countriesInPage, regions}}>
    {children}
    </CountriesContext.Provider>
  );
};
export const useCountriesValues = () => React.useContext(CountriesContext);