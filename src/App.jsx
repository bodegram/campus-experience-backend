import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoutes from './utils/ProtectedRoutes';
import CollegeProtectedRoutes from './utils/CollegeProtectedRoutes';
import AdminProtectedRoutes from './utils/AdminProtectedRoutes';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import ResetPassword from './components/ResetPassword'
import Map from './components/Map'
import Settings from './components/Settings'
import UpdatePassword from './components/UpdatePassword'
import ManageProfile from './components/ManageProfile'
import Notifications from './components/Notifications'
import Exam from './components/Exam'

//college
import Check from './components/College/Check'

//Admin
import AdminLogin from './components/Admin/AdminLogin'
import Dashboard from './components/Admin/Dashboard'
import PushNotification from './components/Admin/PushNotification'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/reset-password' element={<ResetPassword />} />
          <Route path='/map' element={<ProtectedRoutes>
            <Map />
          </ProtectedRoutes>} />
          <Route path='/settings' element={<ProtectedRoutes>
            <Settings />
          </ProtectedRoutes>} />
          <Route path='/settings/update-password' element={<ProtectedRoutes>
            <UpdatePassword />
          </ProtectedRoutes>} />
          <Route path='/settings/manage-profile' element={<ProtectedRoutes>
            <ManageProfile />
          </ProtectedRoutes>} />
          <Route path='/notifications' element={<ProtectedRoutes>
            <Notifications />
          </ProtectedRoutes>} />
          <Route path='/exam-schedule' element={<ProtectedRoutes>
            <Exam />
          </ProtectedRoutes>} />

      //college routes
          <Route path='/college/check' element={<CollegeProtectedRoutes>
            <Check />
          </CollegeProtectedRoutes>} />

      //Admin routes
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<AdminProtectedRoutes>
            <Dashboard />
          </AdminProtectedRoutes>} />
          <Route path='/admin/push-notification' element={<AdminProtectedRoutes>
            <PushNotification />
          </AdminProtectedRoutes>} />

        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
