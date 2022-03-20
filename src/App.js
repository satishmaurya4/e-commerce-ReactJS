import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/Nav'
import './App.css'
const App = () => {
  return (
      <BrowserRouter>
          <Nav />
          
      </BrowserRouter>
  )
}

export default App