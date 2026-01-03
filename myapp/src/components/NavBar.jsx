import { AppBar, Button, Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <h3>MyApp</h3> &nbsp;
                <Link to="/l">
                <Button variant="contained" color='secondary'>Login</Button> 
                </Link>&nbsp;

                <Link to="/s">
                <Button variant="contained" color='secondary'>Signup</Button>
                </Link>&nbsp;

                 <Link to="/name">
                <Button variant="contained" color='secondary'>Name</Button>
                </Link>&nbsp;

                <Link to="/c">
                <Button variant="contained" color='secondary'>Count</Button>
                </Link>&nbsp;

                <Link to="/t">
                <Button variant="contained" color='secondary'>Text</Button>
                </Link>&nbsp;

                <Link to="/table">
                <Button variant="contained" color='secondary'>User</Button>
                </Link>&nbsp;

                <Link to="/p">
                <Button variant="contained" color='secondary'>Product</Button>
                </Link>&nbsp;
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default NavBar
//&nbsp-create space between words