import { useState } from 'react'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axios'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/authContext'

const useSignup = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const { setAuthUser } = useAuthContext()

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    })
    if (!success) {
      return
    }

    setLoading(true)
    try {
      const res = await axiosInstance.post('/auth/signup', {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      })
      toast.success('Account created successfully')
      localStorage.setItem('chat-user', JSON.stringify(res.data))
      setAuthUser(res.data)
      navigate('/login')
    } catch (error) {
      // console.log(error.response.data.msg)
      toast.error(error.response.data.msg)
    } finally {
      setLoading(false)
    }
  }

  return { loading, signup }
}
export default useSignup

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error('Please fill in all fields')
    return false
  }
  if (password !== confirmPassword) {
    toast.error('Passwords do not match')
    return false
  }
  if (password.length < 6) {
    toast.error('Password must be at least 6 characters')
    return false
  }
  return true
}
