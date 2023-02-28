import React, {useState} from 'react'
import { TextField, Box, Button } from '@mui/material'

function PersonForm({addPerson}) {
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [website, setWebsite] = useState("")

    const handleClick = () => {
        let person = {username, name, email, website}
        addPerson(person)
    }

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
                onChange={(e) => { setUsername(e.target.value)}}/>
            </div>
            <div>
                <TextField id="standard-basic" fullWidth label="Name" variant="standard"
                 onChange={(e) => { setName(e.target.value)}} />
            </div>
            <div>
                <TextField id="standard-basic" fullWidth label="Email" variant="standard"
                onChange={(e) => { setEmail(e.target.value)}} />
            </div>
            <div>
                <TextField id="standard-basic" fullWidth label="Website" variant="standard"
                onChange={(e) => { setWebsite(e.target.value)}} />
            </div>
            <div>
                <br />
                <Button  onClick={handleClick} size="small" variant="contained" color="success">Save person</Button>
            </div>

        </Box>
    )
}

export default PersonForm
