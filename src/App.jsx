import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import './App.css'
import Home from './pages/Home'
import Layoff from  './pages/Layoff'
import CompanyPage from './pages/CompanyPage'
import BreachMap from './pages/BreachMap'
import warnData from '../parser/jsondata/warn/warn_report_1.json'
import top3Layoff from "../parser/jsondata/warn/grouped/top3companies.json"
import top3Breach from "../parser/jsondata/hhs/grouped/top3companies.json"
import breachData from "../parser/jsondata/hhs/breach_report_stateAgg.json"

function App() {
  console.log("warn")
  console.log(warnData)
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home layoff={top3Layoff} breach={top3Breach}/>}/>
        <Route path="/layoff" element={<Layoff companies={warnData}/>}/>
        <Route path="/layoff/:id" element={<CompanyPage data={warnData} />} />
        <Route path="/breach" element={<BreachMap data={breachData}/>}/>
        <Route path="/login" element/>
        
      </Routes>   
    </>
  )
}

export default App
