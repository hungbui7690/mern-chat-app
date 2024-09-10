import { Toaster } from 'react-hot-toast'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import SignUp from './pages/signup/SignUp'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'

function App() {
  const { authUser } = useAuthContext()

  return (
    <div className='flex justify-center items-center p-4 h-screen'>
      <BrowserRouter basename='/'>
        <Routes>
          <Route
            path='/'
            element={authUser ? <Home /> : <Navigate to={'/login'} />}
          />
          <Route
            path='/login'
            element={authUser ? <Navigate to='/' /> : <Login />}
          />
          <Route
            path='/signup'
            element={authUser ? <Navigate to='/' /> : <SignUp />}
          />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App
