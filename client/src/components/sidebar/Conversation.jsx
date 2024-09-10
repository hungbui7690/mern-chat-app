import useStore from '../../zustand/useStore'

const Conversation = ({ conversation, lastIdx, emoji }) => {
  const { selectedConversation, setSelectedConversation } = useStore()
  const isSelected = selectedConversation?._id === conversation._id

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
				${isSelected ? 'bg-sky-500' : ''}
			`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className='avatar online'>
          <div className='rounded-full w-12'>
            <img src={conversation.profilePic} alt='user avatar' />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex justify-between gap-3'>
            <p className='font-bold text-gray-200'>{conversation.fullName}</p>
            <span className='text-xl'>{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIdx && <div className='my-0 py-0 h-1 divider' />}
    </>
  )
}

export default Conversation
