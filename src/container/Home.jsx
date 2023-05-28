import React from 'react'

const Home = () => {
  return (
    <>
      <div className='app'>
      <div>
        <button className='button'>search</button>
      </div>
        <div>
          <h1>location</h1>
          <img src='http://openweathermap.org/img/wn/' alt='weatherIcon'/>
          <h3>cloudy</h3>
          <h1 className='temperature'>32 degree celsius</h1>
        </div>
      </div>
    </>
  )
}

export default Home