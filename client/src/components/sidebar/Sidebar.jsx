import FriendList from './FriendList.jsx'
import LogoutButton from './LogoutButton'
import SearchInput from './SearchInput'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-slate-500 p-4 border-r'>
      <SearchInput />
      <div className='px-3 divider'></div>
      <FriendList />
      <LogoutButton />
    </div>
  )
}
export default Sidebar
