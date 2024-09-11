import axios from 'axios'

export const axiosInstance = axios.create({
  // baseURL: 'http://localhost:5000/api/v1',
  baseURL: 'https://mern-chat-app-z7fx.onrender.com/api/v1',
})

axiosInstance.defaults.withCredentials = true
