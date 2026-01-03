import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Count = () => {
    var[count,setCount]=useState(0);
    const Add=()=>{
       setCount(count+1)
    }
    const Sub=()=>{
       setCount(count-1)
    }
  return (
    <div>
         <br /><br />
         <Typography variant="h3" >Count:{count}</Typography>
         <br /><br />
         <Button variant='contained' color="success" onClick={Add}>+</Button>
         &nbsp; &nbsp;
         <Button variant='contained' color="error" onClick={Sub}>-</Button>
    </div>
  )
}

export default Count