import React from 'react'
import Img from '../../assets/bg.png'

export default function AdminLogin() {
    return (
        <div className='flex w-screen h-screen gap-[100px]'>
            <div className='flex-1 flex justify-center items-center ps-14 '>
                <div>
                    <div className='text-[#FF6915] text-[18px] font-bold mb-5'>Sign in</div>
                    <div>
                        <form action="">
                            <div className='mb-4'>
                                <label htmlFor="">Email</label><br />
                                <input type="email" placeholder='Enter Email Address' className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' name="" id="" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="">Password</label><br />
                                <input type="password" placeholder='Enter Password' name="" className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' id="" />
                            </div>
                         
                            <div className='mb-4'>
                                <button type="submit" className='w-[500px] border-[1px] border-[#FF6915] bg-[#FF6915] text-[white] outline-none p-[14px] text-sm ' >Sign in</button>
                            </div>
                        
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex-1'>
                <img src={Img} className='w-full h-screen' alt="login-img" />
            </div>
        </div>
    )
}
