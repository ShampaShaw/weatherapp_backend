import React from 'react'
import { useState, useEffect} from 'react'
import videoBG from '../assets/earth_-_8947 (540p).mp4'
import { getFormattedWeatherData } from '../weatherService'


const Home = () => {

  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric')

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getFormattedWeatherData('kolkata', units);
            setWeather(data);
        }
            fetchWeatherData();
      }, [])
  return (
    <>
      <div className='app'>
      <div className='overlay'> </div>
      <div className='video'>
        <video src={videoBG} autoPlay loop muted />
      <div className='contained'>
      <div className='button'>
      <form className='form'>
        <input type='text' name='city' placeholder='Enter City...' id='myInput' />
        <button id='myButton'> °</button>
      </form>
      </div>
      <div className='icon'>
        <h1>{`${weather?.name}, ${weather?.country}`}</h1>
        <img src={weather?.iconURL} alt='weatherIcon'/>
        <h3>{weather?.description}</h3>
        <h1 className='temperature'>{`${weather?.temp.toFixed()}° ${ units === 'metric' ? 'C' : 'F'}`}</h1>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Home