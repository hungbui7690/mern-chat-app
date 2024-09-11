import GenderRadioBox from './GenderRadioBox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignUp'

const SignUp = () => {
  const { loading, signup } = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const inputs = Object.fromEntries(formData)
    await signup(inputs)
  }

  return (
    <div className='flex flex-col justify-center items-center mx-auto min-w-96'>
      <div className='bg-clip-padding bg-gray-400 bg-opacity-0 shadow-md backdrop-blur-lg backdrop-filter p-6 rounded-lg w-full'>
        <h1 className='font-semibold text-3xl text-center text-gray-300'>
          Sign Up
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              name='fullName'
              className='input-bordered w-full h-10 input'
              defaultValue={'John Doe'}
            />
          </div>

          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='johndoe'
              name='username'
              className='input-bordered w-full h-10 input'
              defaultValue={'johndoe'}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              name='password'
              placeholder='Enter Password'
              className='input-bordered w-full h-10 input'
              autoComplete='true'
              defaultValue={'121212'}
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              name='confirmPassword'
              placeholder='Confirm Password'
              className='input-bordered w-full h-10 input'
              autoComplete='true'
              defaultValue={'121212'}
            />
          </div>
          <GenderRadioBox />
          <Link
            to={'/login'}
            className='inline-block mt-2 text-blue-600 text-sm hover:underline'
            href='#'
          >
            Already have an account?
          </Link>
          <div>
            <button
              className='btn-block border-slate-700 mt-2 border btn btn-sm'
              disabled={loading}
            >
              {loading ? (
                <span className='loading loading-spinner'></span>
              ) : (
                'Sign Up'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
