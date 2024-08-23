import React, { useState } from 'react'
import AdminDashboard from './layouts/AdminDashboard'
import api from '../../utils/api'
import { toast } from 'react-toastify'
import { baseURL } from '../../utils/api'
import { useNavigate } from 'react-router-dom'

export default function PushNotification() {
    const [title, setTitle] = useState('')
    const [body, setBody]= useState('')
    const [uploadUrls, setUploadUrls] = useState([]);
    const [uploading, setUploading] = useState(false)
    const navigate = useNavigate()


    

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try{
            const formData =  new FormData()
            formData.append('title', title)
            formData.append('body', body)
            formData.append('image', uploadUrls[0])
          
            const {data} = await api.post('/notifications/', formData)
            toast.success(data.message)
            navigate('/admin/dashboard')
            
        }
        catch(error){
            toast.error(error.response.data.message)
        }
           
    }

  
  return (
    <AdminDashboard>
        <section className='pr-2 pl-2 pt-5'>
            <div className="text-lg text-[#FF6519] font-bold mb-3">Push Notification</div>
            <div className='p-3 border-[1px] border-[gainsboro] h-[460px]'>
               <form action="" onSubmit={handleSubmit}>
                <div className="mb-5">
                    <label htmlFor="">Title</label><br />
                    <input type="text" name="" value={title} onChange={(e)=>setTitle(e.target.value)} required className='outline-none border-[1px] border-[gainsboro] w-full p-3' id="" />
                </div>
                <div className="mb-5">
                    <label htmlFor="">Body</label>
                    <textarea name="" id="" rows={5} required value={body} onChange={(e)=>setBody(e.target.value)} className='outline-none border-[1px] border-[gainsboro] w-full p-3'></textarea>
                </div>
                <div className="mb-5">
                    <label htmlFor="">Upload Image</label>
                    <input type="file" src="" required   onChange={async(e) =>{
                  if (e.target.files.length === 0) return;
                  setUploading(true)
                  const formData = new FormData();
                  formData.append("images", e.target.files[0]); 
              
                  try {
                    const response = await fetch(
                      `${baseURL}/notifications/upload`,
                      {
                        method: "POST",
                        body: formData,
                      }
                    );
              
                    const result = await response.json();
                    setUploadUrls([...uploadUrls, `${result.urls}`]);
                    setUploading(false)
                   console.log("Success:", result.urls);
                  } catch (error) {
                    console.error("Error:", error);
                  }
                }
                } className='outline-none w-full p-3' alt="" />
                </div>
                <div className='float-end'>
                    <button type="submit" className='outline-none border-[1px] border-[#FF6519] bg-[#FF6519]  py-3 px-6 text-white text-sm'>Send</button>
                </div>
               </form>
            </div>
        </section>
    </AdminDashboard>
  )
}
