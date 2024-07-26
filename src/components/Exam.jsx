import React, { useEffect } from 'react'
import DashboardLayout from './layouts/DashboardLayout'
import { useDispatch, useSelector } from 'react-redux'
import { scheduleAsync } from '../redux/slices/scheduleSlice'

export default function Exam() {
    const {data} = useSelector(state=>state.schedule)
    console.log('schedule', data);
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(scheduleAsync)
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
                                        <td>Malcolm Lockyer</td>
                                        <td>1961</td>
                                    </tr>
                                    )
                                })
                            }
                            <tr className='border-b-[1px] border-b-[gainsboro]'>
                                <td>1</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                            </tr>
                            <tr className='border-b-[1px] border-b-[gainsboro]'>
                                <td>2</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                            </tr>
                            <tr className='border-b-[1px] border-b-[gainsboro]'>
                                <td>3</td>
                                <td>Earth, Wind, and Fire</td>
                                <td>1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </DashboardLayout>
    )
}
