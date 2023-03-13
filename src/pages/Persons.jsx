import React, {useState, useEffect} from 'react'
import { TableContainer, TableRow, Table, TableCell, TableBody, TableHead } from '@mui/material'
//import persons from  '../data/users.json'
import PersonRow from '../components/PersonRow'
import PersonForm from '../components/PersonForm'
import firebaseDb from  '../util/firebase'
import { collection, getDocs, deleteDoc, doc, setDoc } from "firebase/firestore"


function Persons() {
  const [personsList, setPersonsList] = useState([])
  const [personEdit, setPersonEdit] = useState({id:"", username:"", email: "", name:"", website:""})

  const renderPersons = () => {
    return  personsList.map( (person)=> (
        <PersonRow person={person} key={person.id}  handleDelete={handleDelete} handleEdit={handleEdit}/>
    ) )
  }

  const getPersons = async () => {
    const personCollection =  collection(firebaseDb, 'persons')
    const personCursor = await getDocs(personCollection)
    //const persons =  personCursor.docs.map(doc => doc.data())

    setPersonsList(personCursor.docs.map(doc => doc.data()))

    //return persons
  }

  useEffect(() => { getPersons() }, [])
  
  const handleAddPerson = (person) => {
/*     let personsTmp = [...personsList]

     if(person.id === ""){
        person.id =  Math.floor(Math.random()*100000)
        personsTmp.push(person)
     }else{
        const indice = personsTmp.findIndex((item) => item.id === person.id)
        personsTmp[indice] = person
     }

     setPersonsList(personsTmp)
    */
    if(person.id === "")
        person.id =  Math.floor(Math.random()*100000)

    setDoc(doc(firebaseDb, "persons", person.id+""), person)
          .then(()=> {
            getPersons()
           })
          
  }

  const handleDelete = (person) => {
    deleteDoc(doc(firebaseDb,"persons", person.id))
       .then(()=> {
        getPersons()
       })
    //console.log(person)
    //setPersonsList(personsList.filter((item)=> item.id !== person.id))
  }

  const handleEdit = (person) => {
    setPersonEdit(person)
  }

  getPersons()
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
