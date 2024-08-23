import React, { useState, useEffect } from 'react'
import Img from '../../assets/bg.png'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync, clearLog } from '../../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function AdminLogin() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch  = useDispatch()
    const navigate = useNavigate()
    const {error, errorMessage, loading, message, isLoggedIn} = useSelector(state=>state.auth)
    useEffect(()=>{
     if(error){
        toast.error(errorMessage)
        dispatch(clearLog())
     }
    }, [error, errorMessage])

    useEffect(()=>{
       if(isLoggedIn){
        toast.success('Logged in successfully')
        dispatch(clearLog())
        setTimeout(()=>{
            navigate('/admin/dashboard')
        }, 2000)
       }
    }, [isLoggedIn])
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(loginAsync({email, password, account:'Admin'}))
    }
     return (
        <div className='flex w-screen h-screen gap-[100px]'>
            <div className='flex-1 flex justify-center items-center ps-14 '>
                <div>
                    <div className='text-[#FF6915] text-[18px] font-bold mb-5'>Sign in</div>
                    <div>
                        <form action="" onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="">Email</label><br />
                                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder='Enter Email Address' className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' name="" id="" />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="">Password</label><br />
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required placeholder='Enter Password' name="" className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' id="" />
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
