import { BsSend } from 'react-icons/bs'

const MessageInput = () => {
  return (
    <form className='my-3 px-4'>
      <div className='flex w-full'>
        <input
          type='text'
          className='block border-gray-600 bg-gray-700 p-2.5 border rounded-lg w-full text-sm text-white'
          placeholder='Send a message'
        />
        <button
          type='submit'
          className='right-2 bottom-6 absolute flex items-center pe-3'
        >
          <BsSend />
        </button>
      </div>
    </form>
  )
}

export default MessageInput
