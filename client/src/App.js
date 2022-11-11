import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar/NavBar'
import Shopping from "./components/Shopping/Shopping"
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/shopping" element={<Shopping />} />

      </Routes>
      {/* <Shopping/> */}
    </>
  )
}

export default App