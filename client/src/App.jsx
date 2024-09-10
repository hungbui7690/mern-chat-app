import { Toaster } from 'react-hot-toast'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
])

function App() {
  return (
    <div className='flex justify-center items-center p-4 h-screen'>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  )
}

export default App
