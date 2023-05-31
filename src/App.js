import React from 'react'
import { Router ,Routes, Route, useNavigate } from 'react-router-dom'
import Home from './container/Home'
import Login from './components/login'
import Navbar from './components/navbar'
import Safety from './components/safety';
const App = () => {
     

  return (
    <div>
        <Routes>
                <Route path='/safety' element={<Safety/>} />
                <Route path='/login' element={<Login />} />
                <Route path="/*" element={<Home/>} />
        </Routes>
    </div>
  )
}

export default App