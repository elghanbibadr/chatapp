import React from 'react'
import SignIn from './SignIn'
import LogOut from './LogOut'

const style = {
    nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
    heading: `text-white text-3xl`
}


const Navbar = (props) => {
  return (
    <div className={style.nav}>
    <h1 className={style.heading}>Chat App</h1>
    { props.user ? <LogOut/> : <SignIn/>}
  </div>
  )
}

export default Navbar