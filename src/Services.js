import { Container } from '@mui/material'
import React from 'react'
import Para from './Para'
import DataTable from './DataTable'
import { Row , Col } from 'react-bootstrap'
import Example from './Example'

export default function Services() {
  return (
    <div>
            <Example />
      <Container>
        <Row>
            <Col lg={6}><DataTable /></Col>  
            <Col lg={6}><Para /></Col>
        </Row>
      </Container>
    </div>
  )
}
