import React from 'react'

export default function Card({title, count, icon}) {
  return (
    <div className='bg-[#FAFAFA] py-8 px-4 w-full'>
        <div><img src={icon} alt="" className='w-6' /></div>
        <div className='text-[13px]'>{title}</div>
        <div className='font-bold'>{count}</div>
    </div>
  )
}
