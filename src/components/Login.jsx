import React, {useState, useEffect} from 'react'
import Img from '../assets/bg.png'
import { Link } from 'react-router-dom'
import checkLogo from '../assets/check.svg'
import colleges from '../_helpers/colleges'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync, clearLog } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'



export default function Login() {
    const [account, setAccount] = useState('Student')
    const [password, setPassword] = useState('')
    const [matricno, setMatricno] = useState('')
    const [college, setCollege] = useState('')
    const dispatch = useDispatch()
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
          if(localStorage.getItem('account') === 'Student'){
            navigate('/map')
          }

          if(localStorage.getItem('account') === 'Faculty'){
            navigate('/college/check')
          }
           
        }, 2000)
       }
    }, [isLoggedIn])
    const handleSubmit = (e)=>{
      e.preventDefault()
      if(account === 'Student'){
        if(matricno === '' || password === ''){
          toast.error('Field is blank')
        }
        else{
          dispatch(loginAsync({matricno, password, account}))
        }
      }
      if(account === 'Faculty'){
        if(college === '' || password === ''){
          toast.error('Field is blank')
        }
        else{
            dispatch(loginAsync({college, password, account}))
        }
      }
    }
  return (
   <div className='lg:flex block w-screen h-screen lg:gap-[100px]'>
        <div className='flex-1 flex justify-center items-center ps-1'>
           <div>
             <div className='text-[#FF6915] text-[18px] font-bold mb-5'>Sign in</div>
             <div className='text-sm mb-2'>Sign in as {!account === null && account }</div>
                    <div className='flex  gap-2 mb-2 lg:w-[500px] w-[200px]'>
                        <button className='px-10 py-4 w-full text-sm bg-[#FAFAFA] outline-none flex gap-1 justify-center' onClick={() => {
                            setAccount('Student')
                            setCollege('')
                            setPassword('')
                            
                            }}>
                            {account === 'Student' && (
                                <img src={checkLogo} alt="" className='w-4' />
                            )}
                            Student
                            </button>
                        <button className='px-10 py-4 w-full text-sm bg-[#FAFAFA] outline-none flex gap-1 justify-center' onClick={() => {
                            setAccount('Faculty')
                            setMatricno('')
                            setPassword('')
                            }}>
                        {account === 'Faculty' && (
                                <img src={checkLogo} alt="" className='w-4'  />
                            )}
                            Faculty
                        </button>
                    </div>
             <div>
                <form action="" onSubmit={handleSubmit}>
                  {
                    account === 'Student' && (
                        <>
                          <div className='mb-4'>
                        <label htmlFor="">Matric No</label><br />
                        <input type="text" value={matricno} onChange={(e)=>setMatricno(e.target.value)} placeholder='Enter Matric No' className='lg:w-[500px]  w-full border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' name="" id="" />
                    </div>
                    <div  className='mb-4'>
                        <label htmlFor="">Password</label><br />
                        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' name="" className='lg:w-[500px] w-full border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' id="" />
                    </div>
                        </>
                    )
                  }
                  {
                    account === 'Faculty' && (
                      <>
                        <div className="mb-4">
                            <label htmlFor="">College</label><br />
                            <select name="" id="" value={college} onChange={(e)=>setCollege(e.target.value)} className='lg:w-[500px] w-full border-[1px] border-[gainsboro] outline-none p-[14px] text-sm'>
                                <option value="" selected disabled>Select College</option>
                                {colleges?.map((item, index)=>{
                                  return (
                                    <option value={item.name}>{item.abbr}</option>
                                  )
                                })}
                            </select>
                        </div>
                          <div  className='mb-4'>
                          <label htmlFor="">Password</label><br />
                          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter Password' name="" className='lg:w-[500px] w-full border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' id="" />
                      </div>
                      </>
                    )
                  }
                    <div  className='mb-4'>
                        <Link className='text-sm text-[#FF6915]' to='/reset-password'>Forget Password?</Link>
                    </div>
                    <div className='mb-4'>
                        <button type="submit" className='lg:w-[500px] w-full border-[1px] border-[#FF6915] bg-[#FF6915] text-[white] outline-none p-[14px] text-sm ' >Sign in</button>
                    </div>
                    <div className='w-[500px]'>
                        <div className='text-center text-sm'>Don't have an account? <span className='text-[#FF6915]'><Link to='/register'>Sign up</Link></span></div>
                    </div>
                </form>
             </div>
           </div>
        </div>
        <div className='lg:flex-1 '>
           <img src={Img} className='lg:w-full lg:h-screen' alt="login-img" />
        </div>
   </div>
  )
}
