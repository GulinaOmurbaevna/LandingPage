import React from 'react'
import NetWorkImg from '../images/Huge Global.png'
import Sponsored  from '../images/Sponsored.png'

function Network() {
  return (
    <div>
      <div className='mt-16 container'>
        <div className='my-24'>
        <h3 className='text-center text-[35px] font-bold'>Choose Your Plan</h3>
        <p className='my-4 w-[555px] text-center mx-auto leading-8 text-[#4F5665]'>Let's choose the package that is best for you and explore it happily and cheerfully.</p> 
        </div>
      
      <div>
        <img src={NetWorkImg} alt="" />
        <img src={Sponsored} alt="" />
      </div>

      </div>
    </div>
  )
}

export default Network
