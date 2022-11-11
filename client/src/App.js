import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./components/Home/Home"
import Login from './components/Auth/Login/Login'
import NavBar from './components/Navbar/NavBar'
import Shopping from "./components/Shopping/Shopping"
import "./App.css"
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Shopping />} />
      </Routes>
      {/* <Shopping/> */}
    </>
  )
}

export default App