import { render, screen } from '@testing-library/react'
import {countries} from '../mocks/countries'

import CountriesList from './CountriesList'

  it('renders with expected values', () => {
    render(<CountriesList countries={countries} />)
    expect(screen.getByRole('cell', { name: /China/i 
      })).toBeInTheDocument()
  })