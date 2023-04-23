import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'
import Layoff from  './pages/Layoff'
import CompanyPage from './pages/CompanyPage'
import warnData from './parser/warn_report.json'
import top3Layoff from './parser/top3companies.json'
import top3Breach from './parser/top3companies.json'

function App() {

  console.log(warnData)
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home layoff={top3Layoff} breach={top3Breach}/>}/>
        <Route path="/layoff" element={<Layoff companies={warnData}/>}/>
        <Route path="/layoff/:id" element={<CompanyPage data={warnData} />} />
        <Route path="/data-breach" element/>
        <Route path="/login" element/>
        
      </Routes>   
    </>
  )
}

export default App
