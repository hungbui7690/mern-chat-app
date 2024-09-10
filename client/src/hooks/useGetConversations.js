import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axios'

const useGetConversations = () => {
  const [loading, setLoading] = useState(false)
  const [conversations, setConversations] = useState([])

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true)
      try {
        const res = await axiosInstance.get('/user')
        setConversations(res.data)
      } catch (error) {
        toast.error(error.response.data.msg)
      } finally {
        setLoading(false)
      }
    }

    getConversations()
  }, [])

  return { loading, conversations }
}

export default useGetConversations
