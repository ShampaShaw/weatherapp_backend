import React from 'react'
import { Router ,Routes, Route, useNavigate } from 'react-router-dom'
import Home from './container/Home'
import Login from './components/login'
import Navbar from './components/navbar'
import Safety from './components/safety'

const App = () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=21287ce169a6a9290f46e9e5de0ee13b`
  return (
    <div>
        <Navbar />
        <Routes>
                <Route path='/safety' element={<Safety/>} />
                <Route path='/login' element={<Login />} />
                <Route path="/" element={<Home/>} />
        </Routes>
    </div>
  )
}

export default App