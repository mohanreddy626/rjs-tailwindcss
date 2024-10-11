import React from 'react'
import Example from './Example'
import { Container } from '@mui/material'
import DataTable from './DataTable'

export default function App() {
  return (
    <div>
      <Example />
      <Container>
        <DataTable />
      </Container>

    </div>
  )
}
