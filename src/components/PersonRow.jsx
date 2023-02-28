import React from 'react'
import { TableRow, TableCell } from '@mui/material'

function PersonRow({person}) {

  return (
    <TableRow>
        <TableCell>{person.id}</TableCell>
        <TableCell>{person.username}</TableCell>
        <TableCell>{person.name}</TableCell>
        <TableCell>{person.email}</TableCell>
        <TableCell>{person.website}</TableCell>
    </TableRow>
  )
}

export default PersonRow
