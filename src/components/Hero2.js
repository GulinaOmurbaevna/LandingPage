import React from 'react'
import HeroSecond from '../images/hero2.png'
import { FaCircleCheck } from "react-icons/fa6";
function Hero2() {
  return (
    <div className='flex flex-wrap w-full h-full px-5 items-center py-5  container flex-row-reverse justify-around'>
    <div className='flex-1 hero ml-28 mt-2'>
      <h1 className='font-medium text-[35px]'>Want anything to be <br />  easy with <span className='font-bold'>LaslesVPN</span> .</h1>
      <p className='text-[#4F5665] my-4 text-[16px]'> Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
      <ul className='leading-10'>
      <div className='flex items-center'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Powerfull online protection.</span>
      </div>

      <div className='flex items-center'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Internet without borders.</span>
      </div>

      <div className='flex items-center'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Supercharged VPN.</span>
      </div>

      <div className='flex items-center'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>No specific time limits.</span>
      </div>
      </ul>

      <button className='border-1 border-[#f53855] px-10 py-2 rounded-lg hover:bg-[#f53955] hover:text-white text-redPink mt-7 hover:shadow-xl'>Get Started</button>
    </div>

    <div>
      <img src={HeroSecond} alt="" className='object-cover w-full h-full'/>
    </div>
  </div>
  )
}

export default Hero2
