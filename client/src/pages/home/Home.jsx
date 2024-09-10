import { useEffect } from 'react'
import MessageContainer from '../../components/message/MessageContainer'
import Sidebar from '../../components/sidebar/Sidebar'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'

const Home = () => {
  const navigate = useNavigate()
  const { authUser } = useAuthContext()

  useEffect(() => {
    if (!authUser) {
      navigate('/login')
    }
  }, [authUser, navigate])

  return (
    <div className='flex bg-clip-padding bg-gray-400 bg-opacity-0 backdrop-blur-lg backdrop-filter rounded-lg sm:h-[450px] md:h-[550px] overflow-hidden'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}
export default Home
