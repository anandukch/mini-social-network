import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import RegisterScreen from './pages/RegisterScreen'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PrimarySearchAppBar from './components/AppBar'
import Auth from "./pages/Auth"
import Home from './pages/Home'
import Profile from "./pages/Profile"
import { useSelector } from 'react-redux'
import { RootState } from './store/store'
function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false)
  // useEffect(() => {
  //   const token = localStorage.getItem('auth')
  //   if (token) {
  //     setIsAuthenticated(true)
  //   }
  // }, [])
  const {userToken} = useSelector((state: RootState) => state.auth)
  
  return (
    <BrowserRouter>
      <PrimarySearchAppBar />
      <Routes>
        <Route path='/' element={
          userToken ? <Navigate to='/profile' /> : <Navigate to='/auth' />
        } />
        <Route path='/auth' element={<Auth />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
