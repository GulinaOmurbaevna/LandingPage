import React from 'react'
import logo from '../images/logo.png'

function Navbar() {
  return (
    <div className='flex items-center justify-between'>
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
        <button>sign in</button>
        <button type="button" class="btn btn-outline-danger rounded rounded-pill">Danger</button>
      </div>
    </div>
  )
}

export default Navbar
