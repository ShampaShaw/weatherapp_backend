import React from 'react'

const Graph = () => {
  return (
    <div>
        <div className='flex flex-row text-sm text-teal-300 space-x-1'>
            <button>Temperature</button>
            <p>|</p>

            <button>Humidity</button>
            <p>|</p>

            <button>UV</button>

        </div>
    </div>
    
  )
}

export default Graph