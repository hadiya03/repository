import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/signup'
import NavBar from './components/NavBar'
import Name from './components/Name'
import Count from './components/Count'
import Text from './components/Text'
import { Route, Routes } from 'react-router-dom'
import User from './components/user'
import Product from './components/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/l' element={<Login/>}/>
        <Route path='/s' element={<Signup/>}/>
        <Route path='/name' element={<Name/>}/>
        <Route path='/c' element={<Count/>}/>
        <Route path='/t' element={<Text/>}/>
        <Route path='/table' element={<User/>}/>
        <Route path='/p' element={<Product/>}/>
      </Routes>

      
      
    </>
  )
}

export default App
