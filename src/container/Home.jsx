import React from 'react'
import { UilSearch , UilLocationPoint } from '@iconscout/react-unicons'
import { useState, useEffect} from 'react'
import videoBG from '../assets/earth_-_8947 (540p).mp4'
import { getFormattedWeatherData } from '../weatherService'
import TimeandLocation from '../components/TimeandLocation'


const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='app'>
      <div className='overlay'> </div>

      <div className='video'>
        <video src={videoBG} autoPlay loop muted />
      <div className='contained'>
      <div className='flex flex-row w-3/4 justify-center space-x-4 text-yellow-500'>
        <input 
          type='text'
          placeholder='Search city...'
          className='text-xl background-color: rgba(0,0,0,0.5) justify-center items-center w-2/4 shadow-xl focus:to-blue-600 h-150 border-radius: 50% placeholder:lowercase'
          id='myInput' />
        <UilSearch size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
        <UilLocationPoint size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
      </div>
      <div className='flex flex-row w-1/4 items-center justify-center'>
        <button className='background-color: rgba(0,0,0,0.5) border: none color: #333 cursor: cursor-pointer padding: 10px 20px text-yellow-200' onClick={toggleMenu} >Units</button>
        { isOpen && ( 
          <ul className='text-xl text-yellow-500 font-light'>
            <li name='metric'>°C</li>
            <li name='imperial'>°F </li>
          </ul>

        )}

        <TimeandLocation />
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Home