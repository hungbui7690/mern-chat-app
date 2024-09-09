import { IoSearchSharp } from 'react-icons/io5'

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2'>
      <input
        type='text'
        placeholder='Search…'
        className='input-bordered rounded-full input'
      />
      <button
        type='submit'
        className='bg-emerald-500 text-white btn btn-circle'
      >
        <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput
