import React from 'react'
import {FaEllipsisV} from 'react-icons/fa'
import timeIcon from '../assets/time.png'

export default function Notification({title, text, time, img}) {
  return (
    <div className='flex justify-between border-b-[gainsboro] border-b-[1px] pb-4 mb-4 last:border-none'>
        <div>
            <img src={img} className='w-[15px]' alt="time_img" />
        </div>
        <div>
            <div>{title}</div>
            <div className='text-sm'>{text}</div>
        </div>
        <div>
            <div className='text-[13px] mb-1'>{time}</div>
            <div className='cursor-pointer'><FaEllipsisV size={15}/></div>
        </div>
    </div>
  )
}
