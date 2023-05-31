import React from 'react'
import { useState, useEffect} from 'react'
import videoBG from '../assets/earth_-_8947 (540p).mp4'
import { getFormattedWeatherData } from '../weatherService'


const Home = () => {

  const [city, setCity] = useState('Delhi')
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState('metric')

    useEffect(() => {
        const fetchWeatherData = async () => {
            const data = await getFormattedWeatherData(city, units);
        }
            fetchWeatherData();
      }, [units, city])

      const handleUnitClick = (e) => {
        const button = e.currentTarget;
        console.log(button);
        const currentUnit = button.innerText.slice(1);
        console.log(button);

        const isCelsius = currentUnit === 'C';
        button.innerText = isCelsius ? "°F" : "°C";
        setUnits(isCelsius ? "metric" : "imperial")
      }

      const enterKeyPressed = (e) => {
        if(e.keyCode === 'Enter')
        setCity(e.currentTarget.value)
      }

  return (
    <>
      <div className='app'>
      <div className='overlay'> </div>

      <div className='video'>
        <video src={videoBG} autoPlay loop muted />
      <div className='contained'>
      <div className='button'>
      <form className='form'>
        <input value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={enterKeyPressed}
          placeholder='Search location'
          id='myInput' />
        <button onClick={(e) => handleUnitClick(e)} className='button'> °F</button>
      </form>
      </div>
      <div className='icon'>
        <h1>{`${weather?.name}, ${weather?.country}`} </h1>
        <img src={weather?.iconURL} alt='weatherIcon'/>
        <h3>{weather?.description}</h3>
        <h1 className='temperature'>{`${weather?.temp.toFixed()}°${ units === 'metric' ? 'C' : 'F'}`}</h1>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Home