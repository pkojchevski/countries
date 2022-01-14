import React from 'react'
import Modal from 'react-bootstrap/Modal'
import { Country } from '../shared/Country';
import CountryDetails from './CountryDetails';


const DetailsModal: React.FC<{show:boolean, handleClose:any, country: Country}> = ({show, handleClose, country}) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{country.name}</Modal.Title>
        </Modal.Header>
        <div style={{margin: '20px'}}>
          <CountryDetails country={country} />
        </div>
        <Modal.Body></Modal.Body>
      </Modal>
    )
}

export default DetailsModal
