import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from './Header'
import Home from '../../containers/Home';


export default class Content extends Component {

    render() {
        return (
            <Container fluid className='mt-3'>
            <Router>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
              </Routes>
            </Router>
            
          </Container>
        )
    }
}

