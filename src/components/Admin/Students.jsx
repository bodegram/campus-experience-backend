import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminDashboard from './layouts/AdminDashboard'
import { Link } from 'react-router-dom'
import { FaEllipsisV } from 'react-icons/fa'
import { usersAsync } from '../../redux/slices/authSlice'

export default function Students() {
    const {users} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(usersAsync('Student'))
    }, [dispatch])
    return (
        <AdminDashboard>
            <section className='pr-2 pl-2'>
                <div className='flex justify-between'>
                <div className='text-lg text-[#FF6915] mb-5 font-bold'>Students</div>
        
                </div>
                <div>
                    <table class="table-auto w-full">
                        <thead>
                            <tr className='bg-[#FAFAFA]'>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Matric no</th>
                                <th>Email</th>
                                <th>College</th>
                                <th>Department</th>
                                <th>Level</th>
                                <th>Registered Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-center'>
                            {
                                users?.map((item, index)=>{
                                    return(
                                        <tr className='border-b-[1px] border-b-[gainsboro]'>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.matricno}</td>
                                        <td>{item.email}</td>
                                        <td>{item.college}</td>
                                        <td>{item.department}</td>
                                        <td>{item.level}</td>
                                        <td>{item.createdAt}</td>
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
