import MessageContainer from '../../components/message/MessageContainer'
import Sidebar from '../../components/sidebar/Sidebar'

const Home = () => {
  return (
    <div className='flex bg-clip-padding bg-gray-400 bg-opacity-0 backdrop-blur-lg backdrop-filter rounded-lg sm:h-[450px] md:h-[550px] overflow-hidden'>
      <Sidebar />
      <MessageContainer />
    </div>
  )
}
export default Home
