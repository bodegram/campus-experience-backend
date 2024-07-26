import Axios  from "axios";

const baseURL = 'https://campus-8zi8.onrender.com/api'
const api = Axios.create({
    baseURL,
    headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
    }
})

export default api