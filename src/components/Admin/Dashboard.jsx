import React, { useEffect } from 'react'
import AdminDashboard from './layouts/AdminDashboard'
import Card from './Card'
import usersLogo from '../../assets/users.png'
import userTwoLogo from '../../assets/user2.png'
import userCheckLogo from '../../assets/usercheck.png'
import { FaEllipsisVertical } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { allScheduleAsync } from '../../redux/slices/scheduleSlice'


export default function Dashboard() {
    const {data} = useSelector(state=>state.schedule)
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(allScheduleAsync())
    }, [dispatch])
  return (
    <AdminDashboard>
        <section className='pl-2 pr-2 pt-5'>
            <div className='flex justify-between gap-4 mb-5'>
                 <Card title='Total Users' count='500' icon={usersLogo}/>
                 <Card title='Exam Centres' count='20' icon={userTwoLogo}/>
                 <Card title='Departments' count='70' icon={userCheckLogo}/>
            </div>
            <div>
            <div className='text-md text-[#FF6915] mb-5 font-bold'>Schedule</div>
                <div>
                    <table class="table-fixed w-full">
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
                                    <td><FaEllipsisVertical/></td>
                                </tr>
                                )
                            })
                          }
                       
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    </AdminDashboard>
  )
}
