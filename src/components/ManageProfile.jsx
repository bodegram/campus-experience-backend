import React, { useEffect } from 'react'
import DashboardLayout from './layouts/DashboardLayout'
import ProfileCard from './ProfileCard'
import nameLogo from '../assets/user.png'
import emailLogo from '../assets/envelope.png'
import houseLogo from '../assets/house.png'
import roleLogo from '../assets/role.png'
import levelLogo from '../assets/level.png'
import { useDispatch, useSelector } from 'react-redux'
import { profileAsync, clearLog } from '../redux/slices/authSlice'

export default function ManageProfile() {
  const dispatch = useDispatch()
  const { profileData } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(profileAsync())
    dispatch(clearLog())
  }, [dispatch])
  return (
    <DashboardLayout>
      <section className='pr-2 pl-2'>
        <div className='text-lg text-[#FF6915] mb-5 font-bold'>Manage Profile</div>
        <div>
          <ProfileCard title='Name' text={profileData?.name ?? 'null'} src={nameLogo} />
          <ProfileCard title='Email' text={profileData?.email} src={emailLogo} />
          <ProfileCard title='Matric no' text={profileData?.matricno} src={houseLogo} />
          <ProfileCard title='Role' text={profileData?.account} src={roleLogo} />
          <ProfileCard title='College' text={profileData?.college} src={houseLogo} />
          <ProfileCard title='Department' text={profileData?.department} src={houseLogo} />
          <ProfileCard title='Academic Level' text={profileData?.level} src={levelLogo} />



        </div>
      </section>
    </DashboardLayout>
  )
}
