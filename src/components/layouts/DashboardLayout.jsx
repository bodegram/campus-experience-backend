import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot, FaCalendar, FaHeadset, FaPowerOff, FaGear, FaUser, FaBell } from 'react-icons/fa6'
import { logout } from '../../redux/slices/authSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { FaBars } from 'react-icons/fa6'
import { FaTimes } from 'react-icons/fa'

export default function DashboardLayout({ children }) {
    const [toggleNav, setToggleNav] = useState(false)
    const handleToggleNav = () =>{
        setToggleNav(!toggleNav)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const userLogout = () => {
        dispatch(logout())
        toast.success('Logged out')

    }
    return (
        <div className='lg:flex h-screen'>
            <div className='bg-black lg:h-screen lg:flex-[1] pt-5 pb-5 pl-4 pr-4'>
                <div className='flex justify-between mb-3'>
                    <div className='text-white lg:hidden'>{toggleNav ? <FaTimes color='white' size={24} onClick={handleToggleNav} /> : <FaBars color='white' size={24} onClick={handleToggleNav} />}</div>
                    <div className='text-white text-lg lg:mb-10 font-bold'>Campus</div>
                </div>
                <div className={toggleNav ? 'fixed lg:relative lg:left-0 left-[0] bg-black h-fit lg:top top-[78px]  w-full z-10' : 'fixed lg:relative lg:left-0 left-[-100%]'}>
                    <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915]  '><Link to='/map' className='flex gap-2 '><FaLocationDot className='pt-1' size={16} /> <span className='text-[13px]'>Map</span></Link></div>
                    <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915] '><Link to='/exam-schedule' className='flex gap-2'><FaCalendar className='pt-1' size={16} /> <span className='text-[13px]'>Exam Schedule</span></Link></div>
                    <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915] '><Link to='/settings' className='flex gap-2 '><FaGear className='pt-1' size={16} /><span className='text-[13px]'>Settings</span></Link></div>
                    <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915] '><Link className='flex gap-2 ' onClick={userLogout}><FaPowerOff className='pt-1' size={16} /> <span className='text-[13px]'>Logout</span></Link></div>

                </div>
            </div>
            <div className='lg:flex-[6] block lg:overflow-y-scroll mt-2'>
                <div className='w-full pl-2 pr-2 lg:pt-2 flex justify-between lg:sticky lg:top-[0] mb-2 z-[999] bg-white'>
                    <div className='text-[#FF6519] text-bold'>Map</div>
                    <div className='flex gap-3'>
                        <div><FaUser size={20} /></div>
                        <div><Link to='/notifications'><FaBell size={20} /></Link></div>
                    </div>
                </div>
                <div>
                    {children}
                </div>

            </div>
        </div>
    )
}
