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

const SetAndRise = () => {
  return (
    <div className='section section_description text-teal-300'>
      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilArrowUp />
          <small>max</small>
        </div>
        <h2>32°C</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilArrowDown />
          <small>min</small>
        </div>
        <h2>32°C</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilWind />
          <small>Speed</small>
        </div>
        <h2>30Km/h</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilTear />
          <small>Humidity</small>
        </div>
        <h2>41%</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <Uil0Plus />
          <small>UV</small>
        </div>
        <h2>Strong</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilTear />
          <small>Pressure</small>
        </div>
        <h2>1097</h2>
      </div> 
    </div>
  )
}

export default SetAndRise