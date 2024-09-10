import { useState } from 'react'
import { BsSend } from 'react-icons/bs'
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const [message, setMessage] = useState('')
  const { loading, sendMessage } = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!message) return
    await sendMessage(message)
    setMessage('')
  }

  return (
    <form className='my-3 px-4' onSubmit={handleSubmit}>
      <div className='relative w-full'>
        <input
          type='text'
          className='block border-gray-600 bg-gray-700 p-2.5 border rounded-lg w-full text-sm text-white'
          placeholder='Send a message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type='submit'
          className='absolute inset-y-0 flex items-center end-0 pe-3'
        >
          {loading ? (
            <div className='loading loading-spinner'></div>
          ) : (
            <BsSend />
          )}
        </button>
      </div>
    </form>
  )
}

export default MessageInput
