const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center mx-auto min-w-96'>
      <div className='bg-clip-padding bg-gray-400 bg-opacity-0 shadow-md backdrop-blur-lg backdrop-filter p-6 rounded-lg w-full'>
        <h1 className='font-semibold text-3xl text-center text-gray-300'>
          Login
        </h1>

        <form>
          <div>
            <label className='p-2 label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Enter username'
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
              className='input-bordered w-full h-10 input'
            />
          </div>
          <a
            href='#'
            className='inline-block mt-2 text-sm hover:text-blue-600 hover:underline'
          >
            {"Don't"} have an account?
          </a>

          <div>
            <button className='btn-block mt-2 btn btn-sm'>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
