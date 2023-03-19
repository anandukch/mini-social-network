import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RegisterScreen from './pages/RegisterScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  PrimarySearchAppBar from './components/AppBar'
import Profile from "./pages/Profile"
import Home from './pages/Home'
function App() {
  return (
    <BrowserRouter>
    <PrimarySearchAppBar/>
      <Routes>
        <Route path='/' element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
