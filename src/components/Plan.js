import React from 'react'
import planImg from '../images/Illustration/Free.png'
import { FaCircleCheck } from "react-icons/fa6";

function Plan() {
  return (
    <div className='mt-16 container'>
      <h3 className='text-center text-[35px] font-bold'>Choose Your Plan</h3>
      <p className='my-4 w-[555px] text-center mx-auto leading-8 text-[#4F5665]'>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      <div className='flex items-center justify-center flex-wrap flex-col'>
        <div className='flex gap-8 flex-wrap justify-center'>

        <div className='w-[330px] h-[760px] border-2  hover:border-redPink'>
            <div className='flex justify-center items-center flex-col'>
            <img className='mt-16' src={planImg} alt="" />
                <h3 className='text-[18px] font-bold mt-4'>Free Plan</h3>
            </div>
            <ul className='leading-10'>
      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Powerfull online protection.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Internet without borders.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665] '>Supercharged VPN.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>No specific time limits.</span>
      </div>
      </ul>

        <div className='text-center mt-24'>
       <h3 className='text-[25px] font-bold'>Free</h3>     
      <button type="button" class=" mt-3 rounded-pill  py-1 px-12 border-1 border-[#f53855] hover:bg-[#f53955] hover:text-white text-redPink">Select</button>

        </div>
            
        </div>


        <div className='w-[330px] h-[760px] border-2  hover:border-redPink'>
            <div className='flex justify-center items-center flex-col'>
            <img className='mt-16' src={planImg} alt="" />
                <h3 className='text-[18px] font-bold mt-4'>Free Plan</h3>
            </div>
            <ul className='leading-10'>
      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Powerfull online protection.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Internet without borders.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665] '>Supercharged VPN.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>No specific time limits.</span>
      </div>
      </ul>

        <div className='text-center mt-24'>
       <h3 className='text-[25px] font-bold'>Free</h3>     
      <button type="button" class=" mt-3 rounded-pill  py-1 px-12 border-1 border-[#f53855] hover:bg-[#f53955] hover:text-white text-redPink">Select</button>

        </div>
            
        </div>



        <div className='w-[330px] h-[760px] border-2  hover:border-redPink'>
            <div className='flex justify-center items-center flex-col'>
            <img className='mt-16' src={planImg} alt="" />
                <h3 className='text-[18px] font-bold mt-4'>Free Plan</h3>
            </div>
            <ul className='leading-10'>
      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Powerfull online protection.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>Internet without borders.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665] '>Supercharged VPN.</span>
      </div>

      <div className='flex items-center m-4 mx-5'>
      <FaCircleCheck color='#2FAB73' />
      <span className='ml-3 text-[#4F5665]'>No specific time limits.</span>
      </div>
      </ul>

        <div className='text-center mt-24'>
       <h3 className='text-[25px] font-bold'>Free</h3>     
      <button type="button" class=" mt-3 rounded-pill  py-1 px-12 border-1 border-[#f53855] hover:bg-[#f53955] hover:text-white text-redPink">Select</button>

        </div>
            
        </div>
        </div>
      </div>
    </div>
  )
}

export default Plan
