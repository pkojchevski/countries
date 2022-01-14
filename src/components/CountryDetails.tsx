import Table from 'react-bootstrap/Table'
import { Country } from '../shared/Country'


const CountryDetails: React.FC<{country: Country}> = ({country}) => {
    
return (
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>Region</th>
      <th>Capital</th>
      <th>Population</th>
      <th>Flag</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{country.region}</td>
      <td>{country.capital}</td>
      <td>{country.population}</td>
      <td className="mx-auto">
        <img width='35' src={country.flags.png} alt="flag"/>
        
        </td>
    </tr>
  </tbody>
</Table>
)
}

export default CountryDetails