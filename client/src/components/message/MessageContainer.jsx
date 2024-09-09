import MessageInput from './MessageInput'
import Messages from './Messages'
// import { TiMessages } from 'react-icons/ti'

const MessageContainer = () => {
  return (
    <div className='flex flex-col md:min-w-[450px]'>
      <>
        <div className='bg-gray-800 mb-2 px-4 py-2'>
          <span className='label-text'>To:</span>{' '}
          <span className='font-bold text-gray-400'>John doe</span>
        </div>

        <Messages />
        <MessageInput />
      </>
    </div>
  )
}

// const NoChatSelected = () => {
//   return (
//     <div className='flex justify-center items-center w-full h-full'>
//       <div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl'>
//         <p>Welcome 👋 JoeDoe ❄</p>
//         <p>Select a chat to start messaging</p>
//         <TiMessages className='text-3xl text-center md:text-6xl' />
//       </div>
//     </div>
//   )
// }

export default MessageContainer
