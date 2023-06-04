import React from 'react'
import { UilSearch , UilLocationPoint } from '@iconscout/react-unicons'
import { useState, useEffect} from 'react'
import videoBG from '../assets/earth_-_8947 (540p).mp4'
import { getFormattedWeatherData } from '../weatherService'
import TimeAndLocation from '../components/TimeAndLocation'
import TemperatureAndDetails from '../components/TemperatureAndDetails'


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='app'>
      <div className='overlay'> 

      <div className='video'>
        <video src={videoBG} autoPlay loop muted />
      <div className='contained'>
      <div className='search flex flex-row w-full items-center justify-between space-x-4 p-1 border-r-0.4'>
      <div className='flex flex-row w-full space-x-4 h-full'>
        <input 
          type='text'
          placeholder='Search city...'
          className='text-xl background-color: rgba(0,0,0,0.5) justify-center items-center w-2/4 shadow-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full placeholder:lowercase'
          id='myInput' />
        <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125 items-center justify-center h-full' />
        <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125 items-center justify-center h-full' />
        </div>

        <div className='flex flex-row items-center justify-center text-2xl text-teal-300'>
        <button className='background-color: rgba(0,0,0,0.5)  color: #333 cursor: cursor-pointer padding: 10px 20px text-teal-300' onClick={toggleMenu} >Units</button>
        { isOpen && ( 
          <ul className='text-xl text-yellow-500 font-light'>
            <li name='metric'>°C</li>
            <li name='imperial'>°F </li>
          </ul>

        )}
      </div>
      </div>
        <TimeAndLocation />
        <TemperatureAndDetails/>
      
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Home