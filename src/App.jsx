import React, { useContext } from 'react'
import { Route, Routes ,useNavigate } from 'react-router-dom'
import Home from './Pages/Home/Home' ;
import About from './Pages/About/About' ;
import ProjectDetails from './Pages/Projects/ProjectDetails'
import { useState, useEffect, } from 'react';
import { Context } from './Context';


const App = () => {

  const { isDarkMode, setIsDarkMode } = useContext(Context);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />} />
        <Route path="/project/:id" element={<ProjectDetails isDarkMode={isDarkMode} />} />
      </Routes>
    </div>    
  )
}

export default App
