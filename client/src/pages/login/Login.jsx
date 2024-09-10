import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'
import { useEffect } from 'react'
import useLogin from '../../hooks/useLogin'

const Login = () => {
  const navigate = useNavigate()
  const { authUser } = useAuthContext()
  const { loading, login } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const inputs = Object.fromEntries(formData)
    await login(inputs)
  }

  useEffect(() => {
    if (authUser) {
      navigate('/')
    }
  }, [authUser, navigate])

  return (
    <div className='flex flex-col justify-center items-center mx-auto min-w-96'>
      <div className='bg-clip-padding bg-gray-400 bg-opacity-0 shadow-md backdrop-blur-lg backdrop-filter p-6 rounded-lg w-full'>
        <h1 className='font-semibold text-3xl text-center text-gray-300'>
          Login
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
              name='username'
              className='input-bordered w-full h-10 input'
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text' autoComplete={'true'}>
                Password
              </span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              className='input-bordered w-full h-10 input'
              autoComplete='true'
            />
          </div>
          <Link
            to='/signup'
            href='#'
            className='inline-block mt-2 text-blue-600 text-sm hover:underline'
          >
            {"Don't"} have an account?
          </Link>

          <div>
            <button className='btn-block mt-2 btn btn-sm' disabled={loading}>
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Login'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
