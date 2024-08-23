import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allScheduleAsync } from '../../redux/slices/scheduleSlice'
import AdminDashboard from './layouts/AdminDashboard'
import { Link } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa'

export default function AllSchedules() {
    const {data} = useSelector(state=>state.schedule)
    console.log('schedule', data);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(allScheduleAsync())
    }, [dispatch])
    return (
        <AdminDashboard>
            <section className='pr-2 pl-2'>
                <div className='flex justify-between'>
                <div className='text-lg text-[#FF6915] mb-5 font-bold'>Exam Schedule</div>
                <div>
                    <Link to='/admin/add-schedule'>Add Schedule</Link>
                </div>
                </div>
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
                                <th>Action</th>
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
                                        <td><FaEllipsisV/></td>
                                    </tr>
                                    )
                                })
                            }
                          
                        </tbody>
                    </table>
                </div>
            </section>
        </AdminDashboard>
    )
}
