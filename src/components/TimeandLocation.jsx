import React from 'react'
import {
  UilSun,
  UilSunset,
  UilArrowUp,
  UilArrowDown,
} from '@iconscout/react-unicons';
import { getFormattedWeatherDta } from '../weatherService'

const TimeAndLocation = () => {
  return (
    <div className='justify-center'>
      <div className='DateAndTime w-full h-full space-y-2 justify-center items-center flex flex-col'>
        <div className='Date text-teal-300 text-xl font-extralight'>
          <p>Friday, 2 June 2023</p>
        </div>
        <div className='Time justify-center items-center text-teal-300 text-xl font-extralight'>
          <p>Time</p>
        </div>
        
      </div>
      <div className='flex flex-row items-center justify-center space-x-2 text-teal-300 text-sm py-0 '>
      <UilSun />
        <p className='font-light'>Rise: <span>SunriseAM</span></p>
        

        <UilSunset />
        <p className='font-light'>Set: <span>06:10 PM</span></p>
      

      </div>

      
    </div>
  )
}

export default TimeAndLocation