import React from 'react'
import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

export default function Loader() {
    return (
        <Container fluid> 
        <Button variant="primary" disabled className="mx-auto w-100 mt-9">
            <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            <span className="visually-hidden">Loading...</span>
        </Button>
      </Container>
    )
}
