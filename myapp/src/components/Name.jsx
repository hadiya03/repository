import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Name = () => {
    
        var[name,setName]=useState("Alan") //name=alan
        var[a,seta]=useState() //a is empty
        

            const inputHandler=(e)=>{
            console.log(e.target.value)
            setName(e.target.value)

        } 
        //e contains the returned value after something typed on textfield 
        const inputHandle=()=>{
            seta(name)
        }
        
  
  return (
    <div>
        <h2>Welcome {a} </h2>
        <TextField label="enter name" variant="filled" onChange={inputHandler}/><br /> <br />
        <Button variant="contained" onClick={inputHandle}>ADD</Button>
    </div>
  )
}

export default Name