import React from 'react'

export default function ProfileCard({title, text, src}) {
  return (
    <div className='flex justify-between bg-[#FAFAFA] p-4 mb-4'>
        <div className='flex gap-3'>
            <div><img src={src} className='w-[25px]' alt="" srcset="" /></div>
            <div className='text-sm'>{title}</div>
        </div>
        <div className='text-sm'>
            {text}
        </div>
    </div>
  )
}
