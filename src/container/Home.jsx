import React from 'react'
import videoBG from '../assets/earth_-_8947 (540p).mp4'

const Home = () => {
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
        <button id='myButton'>Submit</button>
      </form>
      </div>
      <div>
        <h1>location</h1>
        <div className='icon' >
        <img src='http://openweathermap.org/img/wn/02d@2x.png' alt='weatherIcon'/>
        </div>
        <h3>cloudy</h3>
        <h1 className='temperature'>32 degree celsius</h1>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Home