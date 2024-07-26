import React, { useEffect, useState } from 'react'
import DashboardLayout from './layouts/DashboardLayout'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { updatePasswordAsync, clearLog } from '../redux/slices/authSlice'

export default function UpdatePassword() {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const dispatch = useDispatch()
    const {message, error, errorMessage} = useSelector(state=>state.auth)

    useEffect(()=>{
       if(message !== null){
        toast.success(message)
        dispatch(clearLog())
       }
    }, [message])

    useEffect(()=>{
      if(error){
        toast.error(errorMessage)
        dispatch(clearLog())
      }
    }, [error])

    const handleSubmit = (e) =>{
      e.preventDefault()
      if(cpassword === newPassword){
          dispatch(updatePasswordAsync({oldPassword, newPassword}))
      }
      else{
        toast.error('Password does not match')
      }
    }
  return (
    <DashboardLayout>
        <div className='text-lg text-[#FF6915] pr-2 pl-2 mb-5 font-bold'>Update Password</div>
        <section className='border-solid border-[1px] border-[gainsboro] p-10 mr-2 ml-2 h-fit'>
             <div>
                <form action="" onSubmit={handleSubmit}>
                    <div className='mb-2'> 
                        <label htmlFor="">Current Password</label><br />
                        <input type="password" name="" required value={oldPassword} onChange={(e)=>setOldPassword(e.target.value)} className='w-full border-solid border-[gainsboro] border-[1px] outline-none bg-white text-black p-3 text-sm' id="" />
                    </div>
                    <div className='mb-2'> 
                        <label htmlFor="">New Password</label><br />
                        <input type="password" name="" required value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} className='w-full border-solid border-[gainsboro] border-[1px] outline-none bg-white text-black p-3 text-sm' id="" />
                    </div>
                    <div className='mb-2'> 
                        <label htmlFor="">Confirm Password</label><br />
                        <input type="password" name="" required value={cpassword} onChange={(e)=>setCpassword(e.target.value)} className='w-full border-solid border-[gainsboro] border-[1px] outline-none bg-white text-black p-3 text-sm' id="" />
                    </div>
                    <div className='float-end'>
                        <button type="submit" className='bg-[#FF6915] text-white p-2 w-40 text-[13px]'>Update</button>
                    </div>
                </form>
             </div>
        </section>
    </DashboardLayout>
  )
}
