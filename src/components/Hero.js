import React from 'react'
import HeroImg from '../images/img1.png'
 

function Hero() {
  return (
    <div className='flex flex-wrap w-full h-full px-5 items-center py-5  container'>
      <div className='flex-1'>
        <h1 className='font-medium text-[50px]'>Want anything to be <br />  easy with <span className='font-bold'>LaslesVPN</span> .</h1>
        <p className='text-[#4F5665] my-4 text-[16px]'> Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
        <button className='border-1 border-[#f53855] px-10 py-2 rounded-lg hover:bg-[#f53955] hover:text-white text-redPink mt-7 hover:shadow-xl'>Get Started</button>
      </div>

      <div>
        <img src={HeroImg} alt="" className='object-cover w-full h-full'/>
      </div>
    </div>
  )
}

export default Hero
