import React from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './container/Home'
import Login from './components/login'

const App = () => {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=21287ce169a6a9290f46e9e5de0ee13b`
  return (
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path="/*" element={<Home/>} />
    </Routes>
  )
}

export default App