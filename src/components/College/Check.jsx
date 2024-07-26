import React from 'react'
import CollegeDashboard from './layouts/CollegeDashboard'

export default function Check() {
  return (
    <CollegeDashboard>
    <section className='pr-2 pl-2'>
        <div className='text-lg text-[#FF6519] mb-5 font-bold'>Check In/Out</div>
       <div className='border-[1px] border-[gainsboro] p-3 h-[400px]' >
           <div>
            <form action="">
                <label htmlFor="">Invigilator</label>
                <input type="text" name="" className='outline-none border-[1px] border-[gainsboro] w-full p-3 text-sm' id="" />
                <button type="submit" className='bg-[#FF6519] text-white border-[1px] border-[#FF6519] py-2 px-5 mt-3 text-[13px] float-end'>Check In</button>
            </form>
           </div>
       </div>
    </section>
    </CollegeDashboard>
  )
}
