import React from 'react'

const TemperatureAndDetails = () => {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>Haze</p>
        </div>
        <div className='flex flex-row items-center justify-between text-teal-300'>
            <img
                src='http://openweathermap.org/img/wn/01d@2x.png'
                alt=''
                w-18
            />
            <p className='text-3xl'>30°C</p>
        </div>
        <div className='flex flex-row items-center justify-between text-teal-200'>
            
        </div>
    </div>
  )
}

export default TemperatureAndDetails