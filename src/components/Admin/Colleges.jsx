import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allScheduleAsync } from '../../redux/slices/scheduleSlice'
import AdminDashboard from './layouts/AdminDashboard'
import { Link } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa'

export default function Colleges() {
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
                <div className='text-lg text-[#FF6915] mb-5 font-bold'>Colleges</div>
                </div>
                <div>
                    <table class="table-auto w-full">
                        <thead>
                            <tr className='bg-[#FAFAFA]'>
                                <th>S/N</th>
                                <th>Invigilator</th>
                                <th>College</th>
                                <th>Venue</th>
                                <th>Course</th>
                                <th>Exam Date</th>
                                <th>Check In/Out</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                data?.map((item, index)=>{
                                    return(
                                        <tr className='border-b-[1px] border-b-[gainsboro]'>
                                        <td>{index + 1}</td>
                                        <td>{item?.invigilator}</td>
                                        <td>{item?.college}</td>
                                        <td>{item?.venue}</td>
                                        <td>{item?.code}</td>
                                        <td>{item?.examdate}</td>
                                        <td>{item?.check}</td>
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
