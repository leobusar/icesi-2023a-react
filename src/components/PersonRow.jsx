import React from 'react'
import { TableRow, TableCell, Button } from '@mui/material'

function PersonRow({person, handleEdit, handleDelete}) {

  return (
    <TableRow>
        <TableCell>{person.id}</TableCell>
        <TableCell>{person.username}</TableCell>
        <TableCell>{person.name}</TableCell>
        <TableCell>{person.email}</TableCell>
        <TableCell>{person.website}</TableCell>
        <TableCell>
        <Button
            onClick={()=> handleEdit(person) } 
            variant="contained" color="info">Editar</Button>&nbsp;&nbsp;     
          <Button 
            onClick={()=> handleDelete(person) } 
            variant="contained" color="error">Eliminar</Button>
        </TableCell>
    </TableRow>
  )
}

export default PersonRow
