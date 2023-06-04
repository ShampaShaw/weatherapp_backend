import React from 'react'

const TimeandLocation = () => {
  return (
    <div className='TimeAndLocation w-full'>
      <div className='DateAndTime w-2/4'>
        <div className='Date text-teal-300 text-xl font-extralight'>
          Friday, 2 June 2023
        </div>
        <div className='Time text-teal-300 text-xl font-extralight'>
          Time
        </div>
      </div>
      <div className='Location w-2/4'>
        <p className='text-teal-300 text-3xl font-medium'> Kolkata, IN</p>
      </div>
    </div>
  )
}

export default TimeandLocation