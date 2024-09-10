import { useEffect } from 'react'
import useConversation from '../../zustand/useConversation'
import MessageInput from './MessageInput'
import Messages from './Messages'
import { TiMessages } from 'react-icons/ti'
import { useAuthContext } from '../../context/authContext'

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation()

  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null)
  }, [setSelectedConversation])

  return (
    <div className='flex flex-col justify-between w-[70vw]'>
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div className='flex flex-col justify-center w-full h-full'>
          <div className='bg-slate-500 mb-2 px-4 py-2'>
            <span className='label-text'>To:</span>{' '}
            <span className='font-bold text-gray-900'>
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </div>
      )}
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
  const { authUser } = useAuthContext()
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl'>
        <p>Welcome, {authUser.fullName} 👏</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className='text-3xl text-center md:text-6xl' />
      </div>
    </div>
  )
}
