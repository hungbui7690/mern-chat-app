import { useState } from 'react'
import toast from 'react-hot-toast'
import { useAuthContext } from '../context/authContext'
import { axiosInstance } from '../utils/axios'
import { useNavigate } from 'react-router-dom'

const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()
  const navigate = useNavigate()

  const login = async ({ username, password }) => {
    const success = handleInputErrors(username, password)
    if (!success) return
    setLoading(true)
    try {
      const res = await axiosInstance.post('/auth/login', {
        username,
        password,
      })
      localStorage.setItem('chat-user', JSON.stringify(res.data))
      setAuthUser(res.data)
      navigate('/')
    } catch (error) {
      toast.error(error.response.data.msg)
    } finally {
      setLoading(false)
    }
  }

  return { loading, login }
}
export default useLogin

function handleInputErrors(username, password) {
  if (!username || !password) {
    toast.error('Please fill in all fields')
    return false
  }

  return true
}
