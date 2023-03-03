import React, {useEffect, useState} from 'react'
import { TextField, Box, Button } from '@mui/material'

function PersonForm({addPerson, personEdit}) {
    const [id, setId] = useState("")
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")

    const handleClick = () => {
        //let  id =  Math.floor(Math.random()*100000)
        let person = {id, username, name, email, website}
        setId("")
        setUsername("")
        setName("")
        setEmail("")
        setWebsite("")
        addPerson(person)
    }

    useEffect( () => {
        setId(personEdit.id)
        setUsername(personEdit.username)
        setName(personEdit.name)
        setEmail(personEdit.email)
        setWebsite(personEdit.website)        
        }, [personEdit] )

    return (
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '60ch', margin: 'auto' },
        }}
        noValidate
        autoComplete="off"
        >
            <div>
                <TextField id="standard-basic" fullWidth label="Username" variant="standard"
                onChange={(e) => { setUsername(e.target.value)}} value={username}/>
            </div>
            <div>
                <TextField id="standard-basic" fullWidth label="Name" variant="standard"
                 onChange={(e) => { setName(e.target.value)}} value={name}/>
            </div>
            <div>
                <TextField id="standard-basic" fullWidth label="Email" variant="standard"
                onChange={(e) => { setEmail(e.target.value)}} value={email}/>
            </div>
            <div>
                <TextField id="standard-basic" fullWidth label="Website" variant="standard"
                onChange={(e) => { setWebsite(e.target.value)}} value={website}/>
            </div>
            <div>
                <br />
                <Button  onClick={handleClick} size="small" variant="contained" color="success">Save person</Button>
            </div>

        </Box>
    )
}

export default PersonForm
