import React, { useState } from 'react'
import AdminDashboard from './layouts/AdminDashboard'
import { toast } from 'react-toastify'
import funaabDepartments from '../../_helpers/departments'
import colleges from '../../_helpers/colleges'
import api from '../../utils/api'
import { useNavigate } from 'react-router-dom'

export default function AddSchedule() {
    const [college, setCollege] = useState('')
    const [department, setDepartment] = useState('')
    const [level, setLevel] = useState('')
    const [semester, setSemester] = useState('')
    const [code, setCode] = useState('')
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('')
    const [date, setDate] = useState('')
    const [start, setStart] = useState('')
    const [stop, setStop] = useState('')
    const [venue, setVenue] = useState('')
    const [invigilator, setInvigilator] = useState('')

    const navigate = useNavigate()




    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            const formData = new FormData()
            formData.append('title', title)
            formData.append('department', department)
            formData.append('level', level)
            formData.append('semester', semester)
            formData.append('code', code)
            formData.append('status', status)
            formData.append('examdate', date)
            formData.append('start', start)
            formData.append('stop', stop)
            formData.append('venue', venue)
            formData.append('invigilator', invigilator)
            formData.append('college', college)
            api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`

            const { data } = await api.post('/schedule/', formData)
            console.log('hi');
            console.log(data);
            toast.success(data.message)
            navigate('/admin/schedule')

        }
        catch (error) {
            console.log(error.response.data.message);
            toast.error(error.response.data.message)
        }

    }


    return (
        <AdminDashboard>
            <section className='pr-2 pl-2 pt-5'>
                <div className="text-lg text-[#FF6519] font-bold mb-3">Add Schedule</div>
                <div className='p-3 border-[1px] border-[gainsboro] h-fit'>
                    <form action="" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="">College</label><br />
                            <select name="" id="" value={college}  onChange={(e) => setCollege(e.target.value)} required className='outline-none border-[1px] border-[gainsboro] w-full p-3' >
                                <option value=""></option>
                                {colleges?.map((item, index) => {
                                    return (
                                        <option value={item.name}>{item.abbr}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="">Department</label><br />
                            <select name="" id="" value={department} required onChange={(e) => setDepartment(e.target.value)}  className='outline-none border-[1px] border-[gainsboro] w-full p-3' >
                                <option value=""></option>
                                {funaabDepartments[college]?.map((item, index) => {
                                    return (
                                        <option value={item}>{item}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="mb-5">
                            <label htmlFor="">Level</label><br />
                            <select name="" id="" value={level} required onChange={(e) => setLevel(e.target.value)} className='outline-none border-[1px] border-[gainsboro] w-full p-3'>
                                <option value="" disabled selected>Select Level</option>
                                <option value="100L">100L</option>
                                <option value="200L">200L</option>
                                <option value="300L">300L</option>
                                <option value="400L">400L</option>
                                <option value="500L">500L</option>
                            </select>
                        </div>
                        <div className='lg:flex lg:gap-4 mb-5'>
                            <div className='lg:flex-1'>
                                <label htmlFor="">Semester</label>
                                <select name="" id="" value={semester} required onChange={(e)=>setSemester(e.target.value)} className='outline-none border-[1px] border-[gainsboro] w-full p-3'>
                                    <option value=""></option>
                                    <option value="First Semester">First Semester</option>
                                    <option value="Second Semester">Second Semester</option>
                                </select>
                            </div>
                            <div className='lg:flex-1'>
                                <label htmlFor="">Course Code</label>
                                <input type="text" name="" value={code} required onChange={(e)=>setCode(e.target.value)} id="" className='outline-none border-[1px] border-[gainsboro] w-full p-3' />
                            </div>
                            <div className='lg:flex-1'>
                                <label htmlFor="">Course Title</label>
                                <input type="text" name="" id="" value={title} required onChange={(e)=>setTitle(e.target.value)} className='outline-none border-[1px] border-[gainsboro] w-full p-3' />
                            </div>
                        </div>
                        <div className='mb-5'>
                        <label htmlFor="">Status</label><br />
                            <select name="" id="" value={status} required onChange={(e) => setStatus(e.target.value)} className='outline-none border-[1px] border-[gainsboro] w-full p-3'>
                                <option value="" disabled selected>Select Status</option>
                                <option value="Holding">Holding</option>
                                <option value="Cancelled">Cancelled</option>
                                <option value="Postponed">Postponed</option>
                            
                            </select>
                        </div>
                        <div className='lg:flex lg:gap-4 mb-5'>
                            <div className='lg:flex-1'>
                                <label htmlFor="">Date</label>
                                <input type="date" name="" id="" required value={date} onChange={(e)=>setDate(e.target.value)}  className='outline-none border-[1px] border-[gainsboro] w-full p-3' />
                            </div> 
                            <div className='lg:flex-1'>
                                <label htmlFor="">Start Time</label>
                                <select name="" id="" required value={start} onChange={(e) => setStart(e.target.value)} className='outline-none border-[1px] border-[gainsboro] w-full p-3'>
                                <option value="" disabled selected>Select Start Time</option>
                                <option value="9AM">9AM</option>
                                <option value="10AM">10AM</option>
                                <option value="11AM">11AM</option>
                                <option value="12PM">12PM</option>
                                <option value="1PM">1PM</option>
                                <option value="2PM">2PM</option>
                                <option value="3PM">3PM</option>
                                <option value="4PM">4PM</option>
                                <option value="5PM">5PM</option>
                                <option value="6PM">6PM</option>
                                <option value="7PM">7PM</option>
                                <option value="8PM">8PM</option>
                                <option value="9PM">9PM</option>
                                <option value="10PM">10PM</option>                              
                            </select>
                            </div>
                            <div className='lg:flex-1'>
                                <label htmlFor="">Stop Time</label>
                                <select name="" id="" required value={stop} onChange={(e) => setStop(e.target.value)} className='outline-none border-[1px] border-[gainsboro] w-full p-3'>
                                <option value="" disabled selected>Select Stop Time</option>
                                <option value="9AM">9AM</option>
                                <option value="10AM">10AM</option>
                                <option value="11AM">11AM</option>
                                <option value="12PM">12PM</option>
                                <option value="1PM">1PM</option>
                                <option value="2PM">2PM</option>
                                <option value="3PM">3PM</option>
                                <option value="4PM">4PM</option>
                                <option value="5PM">5PM</option>
                                <option value="6PM">6PM</option>
                                <option value="7PM">7PM</option>
                                <option value="8PM">8PM</option>
                                <option value="9PM">9PM</option>
                                <option value="10PM">10PM</option>                              
                            </select>
                            </div>
                        </div>
                        <div className='lg:flex lg:gap-4 mb-5'>
                            <div className='lg:flex-1'>
                                <label htmlFor="">Venue</label>
                                <input type="text" value={venue} onChange={(e)=>setVenue(e.target.value)} required name="" id=""  className='outline-none border-[1px] border-[gainsboro] w-full p-3' />
                            </div> 
                            <div className='lg:flex-1'>
                                <label htmlFor="">Invigilator</label>
                                <select name="" required id="" value={invigilator} onChange={(e)=>setInvigilator(e.target.value)} className='outline-none border-[1px] border-[gainsboro] w-full p-3'>
                                    <option value=""></option>
                                    {colleges?.map((item, index) => {
                                    return (
                                        <option value={item.name}>{item.abbr}</option>
                                    )
                                })}
                                </select>
                            </div> 
                          
                          
                        </div>

                        <div className='mt-2'>
                            <button type="submit" className='outline-none border-[1px] border-[#FF6519] bg-[#FF6519]  py-3 px-6 text-white text-sm'>Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </AdminDashboard>
    )
}
