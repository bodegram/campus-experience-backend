import React from 'react'
import AdminDashboard from './layouts/AdminDashboard'

export default function PushNotification() {
  return (
    <AdminDashboard>
        <section className='pr-2 pl-2 pt-5'>
            <div className="text-lg text-[#FF6519] font-bold mb-3">Push Notification</div>
            <div className='p-3 border-[1px] border-[gainsboro] h-[460px]'>
               <form action="">
                <div className="mb-5">
                    <label htmlFor="">Title</label><br />
                    <input type="text" name="" className='outline-none border-[1px] border-[gainsboro] w-full p-3' id="" />
                </div>
                <div className="mb-5">
                    <label htmlFor="">Body</label>
                    <textarea name="" id="" rows={5} className='outline-none border-[1px] border-[gainsboro] w-full p-3'></textarea>
                </div>
                <div className="mb-5">
                    <label htmlFor="">Upload Image</label>
                    <input type="file" src="" className='outline-none w-full p-3' alt="" />
                </div>
                <div className='float-end'>
                    <button type="submit" className='outline-none border-[1px] border-[#FF6519] bg-[#FF6519]  py-3 px-6 text-white text-sm'>Send</button>
                </div>
               </form>
            </div>
        </section>
    </AdminDashboard>
  )
}
