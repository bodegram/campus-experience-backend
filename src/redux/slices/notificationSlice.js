import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const notificationAsync = createAsyncThunk('auth/notification', async(_, {dispatch, rejectWithValue})=>{
  try{
     dispatch(setLoading())
    const token = localStorage.getItem('token')
     api.defaults.headers.common['Authorization'] = `Bearer ${token}`
     const {data} = await api.get('/user/notification/mynotification')
     dispatch(notificationSuccess(data.data))
  }
  catch(error){
    dispatch(setError(error.response.data.message))
    return rejectWithValue('An error occurred')
  }
})




const initialState = {
    loading:false,
    error:false,
    errorMessage: null,
    data: null,
    message: null,
}

const notificationSlice = createSlice({
    name:'notification',
    initialState,
    reducers:{
      setLoading: (state)=>{
        state.loading = true
      },
      setError: (state, action)=>{
        state.error= true,
        state.errorMessage = action.payload
      },
      
      clearLog: (state)=>{
        state.loading = false
        state.error = false
        state.message = null
        state.errorMessage = null
      },
      notificationSuccess:(state, action)=>{
         state.data = action.payload
      },
    
    }
})

export const {setLoading, setError, clearLog, logout, notificationSuccess, } = notificationSlice.actions

export default notificationSlice