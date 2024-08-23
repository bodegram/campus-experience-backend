import Axios  from "axios";

//endpoint
//https://basit-backend.onrender.com
export const baseURL = 'https://basit-backend.onrender.com/api/'
const api = Axios.create({
    baseURL,
    headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
    }
})

export default api