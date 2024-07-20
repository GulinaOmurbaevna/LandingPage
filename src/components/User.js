import React from 'react'
import userLogo from '../images/Icon/user.png'

function User() {
  return (
    <div className='bg-white w-[83%] h-[200px] shadow-lg rounded-sm border container relative '>
      <div className='flex justify-between px-5 h-full flex-wrap'>
           <div className='flex gap-4 items-center'>
            <div>
                <img src={userLogo} alt="" />
            </div>

            <div >
                <h3 className='font-bold text-[25px]'>90+</h3>
                <p className='text-[#4f5665] my-2'>users</p>
            </div>
           </div>

           <div className='flex gap-4 items-center'>
            <div>
                <img src={userLogo} alt="" />
            </div>

            <div >
                <h3 className='font-bold text-[25px]'>90+</h3>
                <p className='text-[#4f5665] my-2'>users</p>
            </div>
           </div>


           <div className='flex gap-4 items-center'>
            <div>
                <img src={userLogo} alt="" />
            </div>

            <div >
                <h3 className='font-bold text-[25px]'>90+</h3>
                <p className='text-[#4f5665] my-2'>users</p>
            </div>
           </div>
      </div>
    </div>
  )
}

export default User
