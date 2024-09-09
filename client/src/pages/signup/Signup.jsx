import GenderCheckbox from './GenderCheckbox'

const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto min-w-96'>
      <div className='bg-clip-padding bg-gray-400 bg-opacity-0 shadow-md backdrop-blur-lg backdrop-filter p-6 rounded-lg w-full'>
        <h1 className='font-semibold text-3xl text-center text-gray-300'>
          Sign Up <span className='text-blue-500'> ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='John Doe'
              className='input-bordered w-full h-10 input'
            />
          </div>

          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='johndoe'
              className='input-bordered w-full h-10 input'
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              className='input-bordered w-full h-10 input'
              autoComplete='true'
            />
          </div>

          <div>
            <label className='label'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='input-bordered w-full h-10 input'
              autoComplete='false'
            />
          </div>

          <GenderCheckbox />

          <a
            className='inline-block mt-2 text-sm hover:text-blue-600 hover:underline'
            href='#'
          >
            Already have an account?
          </a>

          <div>
            <button className='btn-block border-slate-700 mt-2 border btn btn-sm'>
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp
