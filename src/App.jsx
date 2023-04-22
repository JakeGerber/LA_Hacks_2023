import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'
import LayOff from  './pages/Layoff'
import data from './parser/warn_report.json'

function App() {

  console.log(data)
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home companies={data}/>}/>
        <Route path="/layoff" element={<LayOff companies={data}/>}/>
        <Route path="/data-breach" element/>
        <Route path="/login" element/>
      </Routes>   
    </>
  )
}

export default App
