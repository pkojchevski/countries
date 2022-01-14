import React from 'react';
import { Country } from '../shared/Country';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

const CountriesList : React.FC<{countries:Country[], open: Function}> = ({countries, open}) => {

    const handleCountry = (country: Country) => {
        open(country)
    }
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Country</th>
            <th>Region</th>
          </tr>
        </thead>
        <tbody>
          {countries && countries.map((country: Country, i: number) => (
                    <tr key={i}>
                    <td>{country.name}</td>
                    <td>{country.region}</td>
                    <td><Button variant="dark" onClick={() => handleCountry(country)}>Details</Button></td>
                  </tr>
                    )
                    )}
        </tbody>
      </Table>
        );
}

export default CountriesList