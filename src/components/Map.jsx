import React from 'react'
import DashboardLayout from './layouts/DashboardLayout'

export default function Map() {
    return (
        <DashboardLayout>
            <div className='h-screen w-full relative'>
                <iframe
                    frameborder="0" className='border-0 h-screen w-full'

                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.056319041468!2d4.2340034!3d8.1428295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10370ddf3dc40c29%3A0x4fcf5756d7ef3776!2sHOME%20OF%20CHAMPIONS%20ASSEMBLY!5e0!3m2!1sen!2sng!4v1568841054170!5m2!1sen!2sng"
                    allowfullscreen>
                </iframe>
            </div>
        </DashboardLayout>
    )
}
