import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './assets/Navbar'
import { Route, Routes } from 'react-router-dom'
import Login from './assets/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Navbar/>
       <Routes>
            <Route path="/l" element={<Login/>} />
       </Routes>
    </>
  )
}

export default App
