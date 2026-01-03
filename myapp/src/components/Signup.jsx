import { Button, TextField } from '@mui/material'
import React from 'react'

function Signup() {
  return (
    <div>
        <h1>signup page</h1>
        <TextField label="name" variant="filled"/><br /><br />
        <TextField label="age" varient="filled"/><br /><br />
        <TextField label="phone" varient="filled"/><br /><br />
        <TextField label="password" varient="filled" type='password'/><br /><br />
        <Button variant="contained">signup</Button>
    </div>
  )
}

export default Signup