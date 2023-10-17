import React from 'react'
import field from '../assets/field.jpg'
const Weather = () => {
    const currentDate = new Date().toDateString();
  return (
    <div>
        <div className='flex justify-between items-center w-screen shadow-md h-[60px] p-10'>
            <h1>Clear Sky</h1>
            <input
             placeholder='Enter your Location'
             className='bg-white border  border-black  rounded p-1 w-[290px] '
            />
            <p>{currentDate}</p>

        </div>
        <div className="flex items-center justify-center h-screen bg-cover" style={{backgroundImage: 'url("field.jpg")'}}>
      {/* Your content here */}
    </div>
 
    </div>
  )
}

export default Weather