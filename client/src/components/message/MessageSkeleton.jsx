const MessageSkeleton = () => {
  return (
    <div className='flex flex-col gap-4 w-52'>
      <div className='w-full h-32 skeleton'></div>
      <div className='w-28 h-4 skeleton'></div>
    </div>
  )
}

export default MessageSkeleton
