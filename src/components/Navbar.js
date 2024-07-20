import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className='flex items-center justify-between container'>
      <div className="logo">
         <img src={logo} alt="" />
      </div>
      <div className="mx-3 my-3 ">
        <a href='/'>About</a>
        <a href='/'>Features</a>
        <a href='/'>Pricing</a>
        <a href='/'>Testimonials</a>
        <a href='/'>Help</a>
      </div>

      <div>
        <button className='py-2 px-4'>sign in</button>
        <button type="button" class=" rounded-pill  py-2 px-4 border-1 border-[#f53855] hover:bg-[#f53955] hover:text-white text-redPink">Danger</button>
      </div>
    </div>
  )
}

export default Navbar
