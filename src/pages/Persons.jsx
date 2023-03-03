import React, {useState} from 'react'
import { TableContainer, TableRow, Table, TableCell, TableBody, TableHead } from '@mui/material'
import persons from  '../data/users.json'
import PersonRow from '../components/PersonRow'
import PersonForm from '../components/PersonForm'


function Persons() {
  const [personsList, setPersonsList] = useState(persons)
  const [personEdit, setPersonEdit] = useState({})

  const renderPersons = () => {
    return  personsList.map( (person)=> (
        <PersonRow person={person} key={person.id}  handleDelete={handleDelete} handleEdit={handleEdit}/>
    ) )
  }

  const handleAddPerson = (person) => {
     let personsTmp = [...personsList]

     if(person.id === ""){
        person.id =  Math.floor(Math.random()*100000)
        personsTmp.push(person)
     }else{
        const indice = personsTmp.findIndex((item) => item.id === person.id)
        personsTmp[indice] = person
     }

     setPersonsList(personsTmp)
  }

  const handleDelete = (person) => {
    console.log(person)
    setPersonsList(personsList.filter((item)=> item.id !== person.id))
  }

  const handleEdit = (person) => {
    setPersonEdit(person)
  }
  return (
    <div>
        <PersonForm addPerson={handleAddPerson} personEdit={personEdit}></PersonForm>
        <TableContainer>
          <Table sx={{minWidth: 650}} >
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Website</TableCell>
                    <TableCell>Actions</TableCell>
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
