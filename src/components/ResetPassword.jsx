import React, { useState } from 'react'
import Img from '../assets/bg.png'
import { Link } from 'react-router-dom'

export default function ResetPassword() {
    const [email, setEmail] = useState('')
  return (
    <div className='h-screen w-screen bg-[#FF6519] flex justify-center items-center' >
          <div className=" bg-white px-10 py-5 w-[400px] ">
              <div>
              <div className='text-[#FF6519] text-center text-lg font-bold mb-4'>Reset Password</div>
              <div>
                <form action="">
                  <input type="email" name="" placeholder='Enter Email Address' className='border-[1px] border-[gainsboro] w-full p-3 outline-none bg-white mb-2' id="" />
                  <button className='border-[1px] border-[#FF6519] w-full p-3 outline-none bg-[#FF6519] text-white text-sm'>Continue</button>
                </form>
                <div className='mt-3'>
                  <p className='text-center text-sm'>Remember Password? <Link className='text-[#FF6519]' to='/login'>Sign in</Link></p>
                </div>
              </div>
              </div>
       </div>
    </div>
  )
}