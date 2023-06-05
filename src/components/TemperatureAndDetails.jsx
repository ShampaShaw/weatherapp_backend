import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from '@iconscout/react-unicons'

const TemperatureAndDetails = () => {
  return (
    <div className='TemperatureAndDetails flex justify-between'>

        <div className='text-teal-300 py-3'>
            <p className='text-teal-300 text-2xl font-medium'> Kolkata, IN</p>
            <img
                src='http://openweathermap.org/img/wn/01d@2x.png'
                alt=''
                className='w-20'
            />
            <p>Haze</p>
           
        </div>
        <div className='flex flex-row items-center justify-between text-teal-200'>
            <p className='text-2xl'>30°C</p>
        </div>
        <div className='flex flex-col space-y-3'>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1' />
              Feels Like:
            <span className='font-medium ml-1'>38°C</span>
          </div>

          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1' />
              Humidity:
            <span className='font-medium ml-1'>50%</span>
          </div>

          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='ml-10' />
              Wind Speed:
            <span className='font-medium ml-1'>12 Km/h</span>
          </div>
        </div>
    </div>
  )
}

export default TemperatureAndDetails