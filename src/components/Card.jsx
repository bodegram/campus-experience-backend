import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaCaretRight } from 'react-icons/fa'

export default function Card({title, route, icon}) {
    const navigate = useNavigate()
  return (
    <div className='flex justify-between pt-5 pb-5 bg-[#FAFAFA] mb-4 pl-2 pr-2 cursor-pointer' onClick={()=>navigate(`${route}`)}>
        <div className='flex gap-4'>
           <div>{icon}</div>
           <div className='text-sm'>{title}</div>
        </div>
        <div>
            <FaCaretRight size={20}/>
        </div>
    </div>
  )
}
