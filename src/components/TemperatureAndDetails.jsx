import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  Uil0Plus,
  UilPressure,
} from '@iconscout/react-unicons'
import TimeAndLocation from './TimeAndLocation'

const TemperatureAndDetails = () => {
  return (
    <div className='TemperatureAndDetails flex justify-between py-0'>

        <div className='text-teal-300 py-3'>
            <p className='text-teal-300 text-2xl font-medium'> Kolkata, IN</p>
            <img
                src='http://openweathermap.org/img/wn/01d@2x.png'
                alt=''
                className='w-20'
            />
            <p>Haze</p>
           
        </div>
        <div className='flex flex-col items-center justify-between text-teal-300 space-y-10'>
            <p className='text-3xl'>30°C</p>
            <div className='flex flex-row justify-center items-center text-sm py-0 space-x-2 '>
                <div>Feels Like:</div>
                <div>36°C</div>
            </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <TimeAndLocation />
        </div>
    </div>
  )
}

export default TemperatureAndDetails