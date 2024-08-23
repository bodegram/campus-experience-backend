import React, {useEffect, useState} from 'react'
import CollegeDashboard from './layouts/CollegeDashboard'
import { useSelector, useDispatch } from 'react-redux'
import { allScheduleAsync } from '../../redux/slices/scheduleSlice'
import { profileAsync, clearLog } from '../../redux/slices/authSlice'
import api from '../../utils/api'
import { toast } from 'react-toastify'

export default function Check() {
  const {data} = useSelector(state=>state.schedule)
  const { profileData } = useSelector(state => state.auth)
  const [name, setName] = useState('')
  const [invigilator, setInvigilator] = useState('')
  const [id, setId] = useState(null)

  const dispatch = useDispatch()
  useEffect(()=>{
     dispatch(allScheduleAsync())
  }, [dispatch])

  useEffect(() => {
    dispatch(profileAsync())
    dispatch(clearLog())
  }, [dispatch])


console.log('invigilator', invigilator);



useEffect(()=>{
  const idx = data.find((item)=>item.code == invigilator)
  console.log('idx', idx);
  
}, [name])


  const handleSubmit = async(e)=>{
     e.preventDefault()
     try{
      const formData = new FormData()
      formData.append('invigilatorName', name)
      formData.append('code', invigilator)
      console.log(formData);
      api.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`
      const {data} = await api.put(`/schedule/${id}`, formData)
      toast.success(data.message)
     }
     catch(error){
      toast.error(error.response.data.message)
     }
  }
  return (
    <CollegeDashboard>
    <section className='pr-2 pl-2'>
        <div className='text-lg text-[#FF6519] mb-5 font-bold'>Check In/Out</div>
       <div className='border-[1px] border-[gainsboro] p-3 h-fit' >
           <div>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Course</label>
                <select name="" defaultValue={invigilator} required onChange={(e)=>setInvigilator(e.target.value)} id=""  className='outline-none border-[1px] border-[gainsboro] w-full p-3 text-sm mb-3' >
                  <option value=""></option>
                  {data?.filter(item=>item?.invigilator === profileData?.college)?.map((item=>{
                    return(
                      <option value={item.code}>{item.code}</option>
                    )
                  }))}
                </select>
                <label htmlFor="">Invigilator</label>
                <input type="text" value={name} required onChange={(e)=>{
                  setName(e.target.value)
                 
                }}  id="" className='outline-none border-[1px] border-[gainsboro] w-full p-3 text-sm' />
                <button type="submit" className='bg-[#FF6519] text-white border-[1px] border-[#FF6519] py-2 px-5 mt-3 text-[13px]'>Check In</button>
            </form>
           </div>
       </div>
    </section>
    </CollegeDashboard>
  )
}
