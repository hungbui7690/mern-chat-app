import { useAuthContext } from '../../context/AuthContext'
import useStore from '../../zustand/useStore'
import { extractTime } from '../../utils/extractTime'

const Message = (message) => {
  const { authUser } = useAuthContext()
  const { selectedConversation } = useStore()
  const fromMe = message.message.senderId === authUser._id
  const formattedTime = extractTime(message.message.createdAt)
  const chatClassName = fromMe ? 'chat-start' : 'chat-end'
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic
  const bubbleBgColor = fromMe ? 'bg-sky-500' : ''

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='avatar chat-image'>
        <div className='rounded-full w-10'>
          <img alt='' src={profilePic} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>
        {message.message.message}
      </div>
      <div className='flex items-center gap-1 opacity-50 text-xs chat-footer'>
        {formattedTime}
      </div>
    </div>
  )
}

export default Message
