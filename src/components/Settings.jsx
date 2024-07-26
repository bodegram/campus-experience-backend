import React from 'react'
import DashboardLayout from './layouts/DashboardLayout'
import Card from './Card'
import { FaUser } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'

export default function Settings() {
  return (
    <DashboardLayout>
        <section className='pl-2 pr-2'>
            <div className='text-lg text-[#FF6915] font-bold'>Settings</div>
            <div className='mt-5 pl-5 pr-5'>
                <Card title='Manage Profile' route='/settings/manage-profile' icon={<FaUser color='#FF6915' size={20}/>}/>
                <Card title='Update Password' route='/settings/update-password' icon={<FaShield color='#FF6915' size={20}/>}/>
            </div>
        </section>
    </DashboardLayout>
  )
}
