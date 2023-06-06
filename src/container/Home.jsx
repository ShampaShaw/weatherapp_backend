import React from 'react'
import { UilSearch , UilLocationPoint } from '@iconscout/react-unicons'
import { useState, useEffect} from 'react'
import videoBG from '../assets/earth_-_8947 (540p).mp4'
import { getFormattedWeatherData } from '../weatherService'
import TimeAndLocation from '../components/TimeAndLocation'
import TemperatureAndDetails from '../components/TemperatureAndDetails'
import SetAndRise from '../components/SetAndRise'
import Graph from '../components/Graph'


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
      <div className='section section_inputs flex flex-row w-full items-center justify-between space-x-4'>
        <input 
          type='text'
          placeholder='Search city...'
          className='text-xl background-color: rgba(0,0,0,0.5) justify-center items-center w-2/4 shadow-xl bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded-full placeholder:lowercase'
          id='myInput' />
        <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125 items-center justify-center h-full' />
        <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125 items-center justify-center h-full' />
      <div className='w-1/4 flex flex-row items-center justify-center text-xl text-teal-300 space-y-1 padding:10px border-radius: 0.4rem backdrop-brightness-50' >
        <button name='metric'>°C</button>
        <p>|</p>
        <button name='imperial'>°F</button>
      </div>  
        
      </div>  
      <div>
        <TimeAndLocation />
      </div>
      <div className='TemperatureAndDetails'>
        <TemperatureAndDetails/>
      </div>
      <div className='SetAndRise'>
        <SetAndRise/>
      </div>
      <div className='Graph'>
        <Graph />
      </div>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Home