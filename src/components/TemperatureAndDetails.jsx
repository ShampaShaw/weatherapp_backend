import React from 'react'

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
    </div>
  )
}

export default TemperatureAndDetails