import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RegisterScreen from './pages/RegisterScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RegisterScreen />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
