import { useEffect, useRef } from 'react'
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from './MessageSkeleton'
import Message from './Message'

const Messages = () => {
  const { messages, loading } = useGetMessages()
  console.log(messages)
  const lastMessageRef = useRef()

  useEffect(() => {
    const timeout = setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
    })

    return () => clearTimeout(timeout)
  }, [messages])

  return (
    <div className='flex-1 px-4 overflow-auto'>
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className='text-center'>Send a message to start the conversation</p>
      )}
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id}>
            <Message message={message} />
          </div>
        ))}
      <div ref={lastMessageRef}></div>
    </div>
  )
}
export default Messages
