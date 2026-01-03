import { AppBar, Button,Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>MyApp</h3> 
                <Link to ='/l'>
                <Button variant="contained" color='secondary'>Login</Button>
                </Link>
                &nbsp;

            
            </Toolbar>
        </AppBar>
    </div>
  )
}
