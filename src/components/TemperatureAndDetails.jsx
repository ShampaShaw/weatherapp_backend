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
import { getFormattedWeatherData, iconUrlFromCode } from '../weatherService'
import weather from '../container/Home'

const TemperatureAndDetails = ({ weather: {name, country,icon, temp, feels_like,details}}) => {
  return (
    <div className='TemperatureAndDetails flex justify-between py-0'>

        <div className='text-teal-300 py-3'>
            <p className='text-teal-300 text-2xl font-medium'>{`${name}, ${country}`}</p>
            <img
                src={ iconUrlFromCode(icon)}
                alt=''
                className='w-20'
            />
            <p>{`${details}`}</p>
           
        </div>
        <div className='flex flex-col items-center justify-between text-teal-300 space-y-10'>
            <p className='text-3xl'>{`${temp}`}</p>
            <div className='flex flex-row justify-center items-center text-sm py-0 space-x-2 '>
            <div className='description_card_icon flex flex-row'>
            <UilTemperature />
            <small>Feels Like: </small>
          </div>
          <h2 className='text-sm'>{`${feels_like}`}</h2>
            </div>
        </div>
        <div className='flex flex-col space-y-2'>
          <TimeAndLocation weather={weather} />
        </div>
    </div>
  )
}

export default TemperatureAndDetails