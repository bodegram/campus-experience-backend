import React from 'react'
import DashboardLayout from './layouts/DashboardLayout'
import Notification from './Notification'

export default function Notifications() {
    return (
        <DashboardLayout>
            <section className='pr-2 pl-2'>
                <div className='text-lg font-bold text-[#FF6519] mb-5'>Notifications</div>
                <div className='border-[gainsboro] border-[1px] p-5'>
                    <Notification
                        title='Exam Rescheduled'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        time='10 min'
                    />
                    <Notification
                        title='Exam Rescheduled'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        time='10 min'
                    />
                    <Notification
                        title='Exam Rescheduled'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        time='10 min'
                    />
                    <Notification
                        title='Exam Rescheduled'
                        text='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
                        time='10 min'
                    />

                </div>
            </section>
        </DashboardLayout>
    )
}
