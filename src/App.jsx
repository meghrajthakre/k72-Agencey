import React, { useRef } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Porject from './pages/Porject'
import Home from './pages/Home'
import Agence from './pages/Agence'


const App = () => {
  
 
  return (
    <div >


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Porject />} />
        <Route path="/agence" element={<Agence />} />
      </Routes>
    </div>
  )
}

export default App