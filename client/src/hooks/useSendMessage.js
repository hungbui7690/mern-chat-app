import { useState } from 'react'
import useStore from '../zustand/useStore'
import toast from 'react-hot-toast'
import { axiosInstance } from '../utils/axios'

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = useStore()

  const sendMessage = async (message) => {
    setLoading(true)
    try {
      const res = await axiosInstance.post(
        `/message/send/${selectedConversation._id}`,
        { message }
      )
      setMessages([...messages, res.data])
    } catch (error) {
      toast.error(error.response.data.msg)
    } finally {
      setLoading(false)
    }
  }

  return { sendMessage, loading }
}

export default useSendMessage
