const Friend = () => {
  return (
    <>
      <div className='flex items-center gap-2 hover:bg-sky-500 py-1 p-2 rounded cursor-pointer'>
        <div className='avatar online'>
          <div className='rounded-full w-12'>
            <img
              src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
              alt='user avatar'
            />
          </div>
        </div>

        <div className='flex flex-col flex-1'>
          <div className='flex justify-between gap-3'>
            <p className='font-bold text-gray-200'>John Doe</p>
            <span className='text-xl'>🎃</span>
          </div>
        </div>
      </div>

      <div className='my-0 py-0 h-1 divider' />
    </>
  )
}
export default Friend
