import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Register from './Pages/Register'
import Login from './Pages/Login'
import ForgotPassword from './Pages/ForgotPassword'
import ResetPassword from './Pages/ResetPassword'
import Footer from './Components/Footer'

const App = () => {
  const [token, setToken] = useState("");
  return (
    <div>
      <BrowserRouter>
      <ToastContainer/>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='/login' element ={<Login setToken={setToken}/>}/>
        <Route path='/forgotpassword' element ={<ForgotPassword/>}/>
        <Route path='/resetpassword/id/token' element ={<ResetPassword/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
