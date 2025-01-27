import axios from "axios"
const instance = axios.create({
    baseURL:"https://mern-todo-aouc.onrender.com/api"
})
export default instance
