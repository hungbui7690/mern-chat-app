import { useState } from 'react'
import Conversation from './Conversation'
import { useEffect } from 'react'
import { axiosInstance } from '../../utils/axios'
import toast from 'react-hot-toast'

const Conversations = () => {
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

  return (
    <div className='flex flex-col py-2 overflow-auto'>
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx={idx === conversations.length - 1}
        />
      ))}

      {loading ? (
        <span className='mx-auto loading loading-spinner'></span>
      ) : null}
    </div>
  )
}

export default Conversations
