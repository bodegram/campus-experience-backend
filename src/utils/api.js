import Axios  from "axios";

//https://campus-8zi8.onrender.com
export const baseURL = 'https://campus-8zi8.onrender.com'
const api = Axios.create({
    baseURL,
    headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
    }
})

export default api