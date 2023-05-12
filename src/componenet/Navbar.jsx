import React from 'react'
import SignIn from './SignIn'
const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}


const Navbar = () => {
  return (
    <div className={style.nav}>
    <h1 className={style.heading}>Chat App</h1>
    <SignIn />
  </div>
  )
}

export default Navbar