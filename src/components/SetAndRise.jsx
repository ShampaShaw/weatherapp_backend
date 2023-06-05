import React from 'react'
import {
    UilSun,
    UilSunset,
    UilArrowUp,
    UilArrowDown,
} from '@iconscout/react-unicons';

const SetAndRise = () => {
  return (
    <div className='flex flex-row items-center justify-center space-x-2 text-teal-300 text-sm py-2'>
        <UilSun />
        <p className='font-light'>Rise: <span>06:10 AM</span></p>
        <p className='font-light'>|</p>

        <UilSunset />
        <p className='font-light'>Set: <span>06:10 PM</span></p>
        <p className='font-light'>|</p>

        <UilArrowUp />
        <p className='font-light'>High: <span>40°</span></p>
        <p className='font-light'>|</p>

        <UilArrowDown />
        <p className='font-light'>Low: <span>29°</span></p>
    </div>
  )
}

export default SetAndRise