import { Container } from '@mui/material'
import React from 'react'
import Charts from './Charts'
import DataTable from './DataTable'
import { Row , Col } from 'react-bootstrap'
import Example from './Example'

export default function About() {
  return (
    <div>
            <Example />
      <Container>
        <Row>
            <Col lg={6}><Charts /></Col>
            {/* <Col lg={4}><Para /></Col> */}
            <Col lg={6}><DataTable /></Col>
        </Row>
      </Container>
    </div>
  )
}
