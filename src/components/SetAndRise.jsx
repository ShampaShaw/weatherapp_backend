import React from 'react'
import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
  Uil6Plus,
  UilPressure,
  UilEye,
} from '@iconscout/react-unicons'

const SetAndRise = ({ weather: {temp_max, temp_min, speed, humidity, pressure, visibility}}) => {
  return (
    <div className='section section_description text-teal-300'>
      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilArrowUp />
          <small>max</small>
        </div>
        <h2>{`${temp_max}`}</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilArrowDown />
          <small>min</small>
        </div>
        <h2>{`${temp_min}`}</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilWind />
          <small>Speed</small>
        </div>
        <h2>{`${speed}`}Km/h</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilTear />
          <small>Humidity</small>
        </div>
        <h2>{`${humidity}`}%</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <UilEye />
          <small>Visibility</small>
        </div>
        <h2>{`${visibility}`} m</h2>
      </div> 

      <div className='card'>
        <div className='description_card_icon flex flex-row'>
          <Uil6Plus />
          <small>Pressure</small>
        </div>
        <h2>{`${pressure}`}</h2>
      </div> 
    </div>
  )
}

export default SetAndRise