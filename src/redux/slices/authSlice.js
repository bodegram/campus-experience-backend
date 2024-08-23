import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const loginAsync = createAsyncThunk('auth/login', async(payload, {dispatch, rejectWithValue})=>{
  try{
     dispatch(setLoading())
     const {data} = await api.post('/user/login', payload)
     localStorage.setItem('token', data.accessToken)
     localStorage.setItem('account', data.account)
     dispatch(loginSuccess(data.data))
  }
  catch(error){
    dispatch(setError(error.response.data.message))
    return rejectWithValue('An error occurred')
  }
})



export const registerAsync = createAsyncThunk('auth/register', async(payload, {dispatch, rejectWithValue})=>{
  try{
     dispatch(setLoading())
     const {data} = await api.post('/user/register', payload)
     console.log('payload',payload);
     console.log('data',data);
     dispatch(registerSuccess(data.message))
  }
  catch(error){
    console.log(error);
    dispatch(setError(error.response.data.message))
    return rejectWithValue('An error occurred')
  }
})


export const profileAsync = createAsyncThunk('auth/profile', async(_,{dispatch,rejectWithValue})=>{
  try{
    dispatch(setLoading())
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const {data} = await api.get('/user/profile')
    dispatch(profileSuccess(data.data))

  }
  catch(error){
    console.log(error);
    dispatch(setError(error.response.data.message))
    return rejectWithValue('An error occurred')
  }
})

export const updatePasswordAsync = createAsyncThunk('auth/updatePassword', async(payload, {dispatch, rejectWithValue})=>{
  try{
    dispatch(setLoading())
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const {data} = await api.post('/user/change-password', payload)
    dispatch(updatePasswordSuccess(data.message))

  }
  catch(error){
    console.log(error);
    dispatch(setError(error.response.data.message))
    return rejectWithValue('An error occurred')
  }
})

export const usersAsync = createAsyncThunk('auth/users', async(payload,{dispatch,rejectWithValue})=>{
  try{
    dispatch(setLoading())
    const token = localStorage.getItem('token')
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`
    const {data} = await api.get(`/user/${payload}`)
    dispatch(usersSuccess(data.data))

  }
  catch(error){
    console.log(error);
    dispatch(setError(error.response.data.message))
    return rejectWithValue('An error occurred')
  }
})

const initialState = {
    loading:false,
    error:false,
    errorMessage: null,
    data: null,
    isAuthenticated: false,
    isRegistered: false,
    message: null,
    isLoggedIn:false,
    profileData:null,
    users:null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
      setLoading: (state)=>{
        state.loading = true
      },
      setError: (state, action)=>{
        state.error= true,
        state.errorMessage = action.payload
      },
      loginSuccess: (state, action)=>{
        state.isAuthenticated = true
        state.data = action.payload
        state.isLoggedIn = true
      },
      registerSuccess: (state, action)=>{
        state.isRegistered = true
        state.message = action.payload
      },
      clearLog: (state)=>{
        state.loading = false
        state.error = false
        state.isRegistered = false
        state.message = null
        state.errorMessage = null
        state.isLoggedIn = false
      },
      logout: (state)=>{
        state.isAuthenticated = false
        state.data = null
        state.profileData = null
        localStorage.removeItem('token')
        localStorage.removeItem('account')
      },
      profileSuccess:(state, action)=>{
         state.profileData = action.payload
      },
      updatePasswordSuccess: (state, action)=>{
        state.message = action.payload
      },
      usersSuccess: (state, action)=>{
        state.users = action.payload
      }
    }
})

export const {setLoading, setError, loginSuccess, registerSuccess, clearLog, logout, profileSuccess, updatePasswordSuccess, usersSuccess} = authSlice.actions

export default authSlice