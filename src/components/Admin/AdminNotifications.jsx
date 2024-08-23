import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminDashboard from './layouts/AdminDashboard'
import { notificationAsync } from '../../redux/slices/notificationSlice'
import Notification from '../Notification'

export default function AdminNotifications() {
    const { data } = useSelector(state => state.notification)
    const dispatch = useDispatch()

    console.log('data', data);

    useEffect(() => {
        dispatch(notificationAsync())
    }, [dispatch])

    function timeSince(date) {
        const seconds = Math.floor((new Date() - date) / 1000); // Convert milliseconds to seconds
        let interval = Math.floor(seconds / 31536000); // Calculate years
        if (interval > 1) return `${interval} years ago`;

        interval = Math.floor(seconds / 2592000); // Calculate months
        if (interval > 1) return `${interval} months ago`;

        interval = Math.floor(seconds / 86400); // Calculate days
        if (interval > 1) return `${interval} days ago`;

        interval = Math.floor(seconds / 3600); // Calculate hours
        if (interval > 1) return `${interval} hrs ago`;

        interval = Math.floor(seconds / 60); // Calculate minutes
        if (interval > 1) return `${interval} min ago`;

        return `${seconds} seconds ago`; // Fallback for seconds
    }

  



    return (
        <AdminDashboard>
            <section className='pr-2 pl-2'>
                <div className='text-lg font-bold text-[#FF6519] mb-5'>Notifications</div>
                <div className='border-[gainsboro] border-[1px] p-5'>
                    {data?.length > 0 ? (
                        data?.map((item, index) => {
                            return (
                                <Notification
                                    key={item?.id} // Assuming item has a unique id
                                    title={item?.title}
                                    text={item?.body}
                                    time={timeSince(new Date(item?.createdAt))} // You might want to replace this with the actual time
                                    img={item?.image}
                                />
                            )
                        })
                    ) : (
                        <div>No notifications available.</div>
                    )}
                </div>
            </section>
        </AdminDashboard>
    )
}
