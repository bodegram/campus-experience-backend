import React, { useEffect } from 'react'
import DashboardLayout from './layouts/DashboardLayout'
import { useDispatch, useSelector } from 'react-redux'
import { scheduleAsync } from '../redux/slices/scheduleSlice'

export default function Exam() {
    const {data} = useSelector(state=>state.schedule)
    console.log('schedule', data);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(scheduleAsync())
    }, [dispatch])
    return (
        <DashboardLayout>
            <section className='pr-2 pl-2'>
                <div className='text-lg text-[#FF6915] mb-5 font-bold'>Exam Schedule</div>
                <div>
                    <table class="table-auto w-full">
                        <thead>
                            <tr className='bg-[#FAFAFA]'>
                                <th>S/N</th>
                                <th>Course code</th>
                                <th>Course Title</th>
                                <th>Status</th>
                                <th>Date & Time</th>
                                <th>Venue</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                data?.map((item, index)=>{
                                    return(
                                        <tr className='border-b-[1px] border-b-[gainsboro]'>
                                        <td>{index + 1}</td>
                                        <td>{item.code}</td>
                                        <td>{item.title}</td>
                                        <td>{item.status}</td>
                                        <td>{item.examdate} [{item.start} - {item.stop}]</td>
                                        <td>{item.venue}</td>
                                    </tr>
                                    )
                                })
                            }
                          
                        </tbody>
                    </table>
                </div>
            </section>
        </DashboardLayout>
    )
}
