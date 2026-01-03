import { Button,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

function Text() {
    var[text,setText]=useState();
   const button1=()=>{
     setText("welcome")
   }
   const button2=()=>{
     setText("hello")
   }
   const button3=()=>{
     setText("hii")
   }
   useEffect(()=>{
      button2()
   },[])
  return (
    <div>
       <Typography variant='h3'>welcome to {text}</Typography><br></br>
       <Button variant='contained' color="success" onClick={button1}>welcome</Button> &nbsp;
       <Button variant='contained' color="error" onClick={button2}>hello</Button> &nbsp;
       <Button variant='contained' color="secondary" onClick={button3}>hii</Button> 
    </div>
  )
}

export default Text