import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold text-white'>Hello <br/> <span className='text-3xl font-semibold text-white'>User 🖐️</span></h1>
        <button className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header