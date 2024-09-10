import { useState } from 'react'
import { useAuthContext } from '../context/authContext'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axios'

const useLogout = () => {
  const [loading, setLoading] = useState(false)
  const { setAuthUser } = useAuthContext()

  const logout = async () => {
    setLoading(true)
    try {
      const res = await axiosInstance.post('/auth/logout')
      if (res.status === 200) toast.success('Logged out successfully')

      localStorage.removeItem('chat-user')
      setAuthUser(null)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, logout }
}

export default useLogout
