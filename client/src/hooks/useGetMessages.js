import { useEffect, useState } from 'react'
import useStore from '../zustand/useStore'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axios'

const useGetMessages = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useStore()

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true)
      try {
        const res = await axiosInstance.get(
          `/message/${selectedConversation._id}`
        )
        setMessages(res.data)
      } catch (error) {
        toast.error(error.response.data.msg)
      } finally {
        setLoading(false)
      }
    }

    if (selectedConversation?._id) getMessages()
  }, [selectedConversation?._id, setMessages])

  return { messages, loading }
}

export default useGetMessages
