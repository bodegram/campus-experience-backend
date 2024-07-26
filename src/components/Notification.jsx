import React from 'react'
import {FaEllipsisV} from 'react-icons/fa'
import timeIcon from '../assets/time.png'

export default function Notification({title, text, time}) {
  return (
    <div className='flex justify-between border-b-[gainsboro] border-b-[1px] pb-4 mb-4 last:border-none'>
        <div>
            <img src={timeIcon} className='w-[40px]' alt="" />
        </div>
        <div>
            <div>{title}</div>
            <div className='text-sm'>{text}</div>
        </div>
        <div>
            <div className='text-sm mb-1'>{time}</div>
            <div className='cursor-pointer'><FaEllipsisV size={15}/></div>
        </div>
    </div>
  )
}
