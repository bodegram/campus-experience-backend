import React from 'react'
import { FaBell, FaUsers, FaPowerOff, FaTableCells, FaCalendar, FaUser, FaComment } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function AdminDashboard({children}) {
  return (
    <div className='flex h-screen'>
    <div className='bg-black h-screen flex-[1] pt-5 pl-4 pr-4'>
        <div className='text-white text-lg mb-10 font-bold'>Campus</div>
        <div>
            <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915]  '><Link to='/admin/dashboard' className='flex gap-2 '><FaTableCells className='pt-1' size={16} /> <span className='text-[13px]'>Dashboard</span></Link></div>
            <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915]  '><Link to='/admin/push-notification' className='flex gap-2 '><FaBell className='pt-1' size={16} /> <span className='text-[13px]'>Push Notification</span></Link></div>
            <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915]  '><Link to='/map' className='flex gap-2 '><FaCalendar className='pt-1' size={16} /> <span className='text-[13px]'>Schedule</span></Link></div>
            <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915]  '><Link to='/map' className='flex gap-2 '><FaUsers className='pt-1' size={16} /> <span className='text-[13px]'>Students</span></Link></div>
            <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915]  '><Link to='/map' className='flex gap-2 '><FaUsers className='pt-1' size={16} /> <span className='text-[13px]'>College</span></Link></div>
            <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915]  '><Link to='/map' className='flex gap-2 '><FaComment className='pt-1' size={16} /> <span className='text-[13px]'>Message</span></Link></div>
            <div className='text-white mb-2 text-sm pt-5 pb-5 pl-2 hover:bg-[#FF6915] w-[180px] absolute bottom-3 '><Link className='flex gap-2 '><FaPowerOff className='pt-1' size={16}/> <span className='text-[13px]'>Logout</span></Link></div>
       
        </div>
    </div>
    <div className='flex-[6] block overflow-y-scroll'>
        <div className='w-full pl-2 pr-2 pt-2 flex justify-between sticky top-[0] mb-2 z-[999] bg-white'>
            <div className='text-[#FF6519] text-bold'>Map</div>
            <div className='flex gap-3'>
                <div><FaUser size={20}/></div>
                <div><Link to='/notifications'><FaBell size={20}/></Link></div>
            </div>
        </div>
        <div>
            {children}
        </div>

    </div>
</div>
  )
}
