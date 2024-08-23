import Axios  from "axios";

//https://basit-backend.onrender.com
export const baseURL = 'https://basit-backend.onrender.com'
const api = Axios.create({
    baseURL,
    headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
    }
})

export default api