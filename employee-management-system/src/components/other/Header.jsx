import React, { useState } from 'react'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // } else {
  //   setUsername(data.firstname)
  // }

  const logoutUser = () => {
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-semibold text-white'>Hello <br/> <span className='text-3xl font-semibold text-white'>{props.firstname} 🖐️</span></h1>
        <button onClick={logoutUser} className='bg-red-500 text-white text-lg font-medium px-5 py-2 rounded-sm'>Logout</button>
    </div>
  )
}

export default Header