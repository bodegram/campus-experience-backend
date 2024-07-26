import Axios  from "axios";

const baseURL = 'http://127.0.0.1:5001/api'
const api = Axios.create({
    baseURL,
    headers:{
        Accept:'application/json',
        "Content-Type":"application/json"
    }
})

export default api