import React from 'react'

const TimeAndLocation = () => {
  return (
    <div className='TimeAndLocation w-full'>
      <div className='DateAndTime w-full h-full'>
        <div className='Date text-teal-300 text-xl font-extralight'>
          Friday, 2 June 2023
        </div>
        <div className='Time text-teal-300 text-xl font-extralight'>
          Time
        </div>
      </div>
      <div className='Location w-2/4 space-y-1 space-x-8'>
        <p className='text-teal-300 text-3xl font-medium'> Kolkata, IN</p>
      </div>
    </div>
  )
}

export default TimeAndLocation