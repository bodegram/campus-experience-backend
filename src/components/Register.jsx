import React, { useEffect, useState } from 'react'
import Img from '../assets/bg.png'
import { Link } from 'react-router-dom'
import checkLogo from '../assets/check.svg'
import colleges from '../_helpers/colleges'
import funaabDepartments from '../_helpers/departments'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { registerAsync, clearLog } from '../redux/slices/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [step, setStep] = useState(1)
    const [account, setAccount] = useState(null)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [matricno, setMatricno] = useState('')
    const [college, setCollege] = useState('')
    const [department, setDepartment] = useState('')
    const [level, setLevel] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {error, errorMessage, loading, message, isRegistered} = useSelector(state=>state.auth)
    useEffect(()=>{
     if(error){
        toast.error(errorMessage)
        dispatch(clearLog())
     }
    }, [error, errorMessage])

    useEffect(()=>{
       if(isRegistered){
        toast.success(message)
        dispatch(clearLog())
        setTimeout(()=>{
            navigate('/login')
        }, 2000)
       }
    }, [isRegistered])
    const handleSubmit = (e) => {
        e.preventDefault()
        if (step === 2) {
            if (account === 'Student') {
                if (email === '' || password === '' || cpassword === '' || matricno === '') {
                    toast.error('Field is blank')
                }
                else {
                    if (password === cpassword) {
                        setStep(3)
                    }
                    else {
                        toast.error('Password does not match')
                    }
                }
            }

            if (account === 'Faculty') {
                if (email !== '' || password !== '' || cpassword !== '' || matricno !== '') {
                    if (cpassword === password) {
                        dispatch(registerAsync({ email, college, account, password }))
                    }
                    else {
                        toast.error('Password does not match')
                    }
                }
                else {
                    toast.error('Field is blank')
                }

            }
        }

        if(account === 'Student' && step === 3){
            if(department !== '' || level !== '' || college !== ''){
                dispatch(registerAsync({ email, college, account, password, level, department, matricno }))

            }
            else{
                toast.error('Field is blank')
            }
        }
    }
    const prevStep = () => {
        if (step == 3) {
            setStep(prev => prev - 1)
        }
    }
    return (
        <div className='flex w-screen h-screen gap-[100px]'>
            <div className='flex-1 pt-3 ps-5 flex justify-center items-center '>
                <div>
                    <div className='text-[#FF6915] text-[18px] font-bold mb-2'>Create Account</div>
                    <div className='text-sm mb-2'>Sign up as {!account === null && account}</div>
                    <div className='flex gap-2 mb-2 w-[500px]'>
                        <button className='px-10 py-4 w-full text-sm bg-[#FAFAFA] outline-none flex gap-1 justify-center' onClick={() => {
                            setAccount('Student')
                            setStep(2)
                            setCollege('')
                            setEmail('')
                            setPassword('')
                            setCpassword('')

                        }}>
                            {account === 'Student' && (
                                <img src={checkLogo} alt="" className='w-4' />
                            )}
                            Student
                        </button>
                        <button className='px-10 py-4 w-full text-sm bg-[#FAFAFA] outline-none flex gap-1 justify-center' onClick={() => {
                            setAccount('Faculty')
                            setStep(2)
                            setCollege('')
                            setEmail('')
                            setPassword('')
                            setCpassword('')
                            setDepartment('')
                            setLevel('')
                            setMatricno('')
                        }}>
                            {account === 'Faculty' && (
                                <img src={checkLogo} alt="" className='w-4' />
                            )}
                            Faculty
                        </button>
                    </div>

                    <div>
                        <form action="" onSubmit={handleSubmit}>
                            {step === 2 &&
                                <>
                                    {account === 'Student' && (
                                        <div className='mb-2'>
                                            <label htmlFor="">Matric No</label><br />
                                            <input type="text" placeholder='Enter Matric No' value={matricno} onChange={(e) => setMatricno(e.target.value)} className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' name="" id="" />
                                        </div>
                                    )}
                                    {
                                        account === 'Faculty' && (
                                            <>
                                                <div className="mb-2">
                                                    <label htmlFor="">College</label><br />
                                                    <select name="" id="" defaultValue={college} onChange={(e) => setCollege(e.target.value)} className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm'>
                                                        <option value="" disabled selected>Select College</option>
                                                        {colleges?.map((item, index) => {
                                                            return (
                                                                <option value={item.name}>{item.abbr}</option>
                                                            )
                                                        })}
                                                    </select>

                                                </div>

                                            </>
                                        )
                                    }
                                    <div className='mb-2'>
                                        <label htmlFor="">Email</label><br />
                                        <input type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} name="" className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' id="" />
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="">Password</label><br />
                                        <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} name="" className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' id="" />
                                    </div>
                                    <div className='mb-2'>
                                        <label htmlFor="">Confirm Password</label><br />
                                        <input type="password" placeholder='Confirm Password' name="" value={cpassword} onChange={(e) => setCpassword(e.target.value)} className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm' id="" />
                                    </div>

                                </>
                            }
                            {
                                account === 'Student' && step === 3 && (
                                    <>
                                        <>
                                            <div className="mb-2">
                                                <label htmlFor="">College</label><br />
                                                <select name="" id="" value={college} onChange={(e) => setCollege(e.target.value)} className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm'>
                                                    <option value="" disabled selected>Select College</option>
                                                    {colleges?.map((item, index) => {
                                                        return (
                                                            <option value={item.name}>{item.abbr}</option>
                                                        )
                                                    })}
                                                </select>

                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="">Department</label><br />
                                                <select name="" id="" value={department} onChange={(e) => setDepartment(e.target.value)} className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm'>
                                                    <option value="" disabled selected>Select Department</option>
                                                    {funaabDepartments?.[college]?.map((item, index) => {
                                                        return (
                                                            <option value={item}>{item}</option>
                                                        )
                                                    })}
                                                </select>

                                            </div>
                                            <div className="mb-2">
                                                <label htmlFor="">Level</label><br />
                                                <select name="" id="" value={level} onChange={(e) => setLevel(e.target.value)} className='w-[500px] border-[1px] border-[gainsboro] outline-none p-[14px] text-sm'>
                                                    <option value="" disabled selected>Select Level</option>
                                                    <option value="100L">100L</option>
                                                    <option value="200L">200L</option>
                                                    <option value="300L">300L</option>
                                                    <option value="400L">400L</option>
                                                    <option value="500L">500L</option>
                                                </select>

                                            </div>
                                        </>
                                    </>
                                )
                            }
                            <div className='mb-2'>
                                <button type="submit" className='w-[500px] border-[1px] border-[#FF6915] bg-[#FF6915] text-[white] outline-none p-[14px] text-sm ' >
                                    {
                                        account === 'Student' && step === 3 ? 'Sign up' : step === 2 && account === 'Faculty' ? 'Sign up' : 'Next'
                                    }
                                </button>
                            </div>
                            {
                                step === 3 && account === 'Student' && (
                                    <div className='mb-2'>
                                        <button className='w-[500px] border-[1px] border-[#FF6915] bg-white text-[#FF6915] outline-none p-[14px] text-sm ' onClick={prevStep} >Go back</button>
                                    </div>
                                )
                            }
                            <div className='w-[500px]'>
                                <div className='text-center text-sm'>Already have an account? <span className='text-[#FF6915]'><Link to='/login'>Sign in</Link></span></div>
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
