import React, {useState} from 'react'
import { TableContainer, TableRow, Table, TableCell, TableBody, TableHead } from '@mui/material'
import persons from  '../data/users.json'
import PersonRow from '../components/PersonRow'
import PersonForm from '../components/PersonForm'


function Persons() {
  const [personsList, setPersonsList] = useState(persons)

  const renderPersons = () => {
    return  personsList.map( (person)=> (
        <PersonRow person={person} key={person.id} />
    ) )
  }

  const handleAddPerson = (person) => {

    console.log(person)
     let personsTmp = [...personsList]

     personsTmp.push(person)

     setPersonsList(personsTmp)
  }

  return (
    <div>
        <PersonForm addPerson={handleAddPerson}></PersonForm>
        <TableContainer>
          <Table sx={{minWidth: 650}} >
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Website</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {renderPersons()}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default Persons
