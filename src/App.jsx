import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/layoff" element/>
        <Route path="/data-breach" element/>
        <Route path="/login" element/>
      </Routes>   
    </>
  )
}

export default App
