const GenderRadioBox = () => {
  return (
    <div className='flex gap-4'>
      <div className='form-control'>
        <label className='space-x-2 cursor-pointer label'>
          <span className='label-text'>Male</span>
          <input
            type='radio'
            name='gender'
            value='male'
            className='border-2 border-slate-500 radio'
          />
        </label>
      </div>
      <div className='form-control'>
        <label className='space-x-2 cursor-pointer label'>
          <span className='label-text'>Female</span>
          <input
            type='radio'
            name='gender'
            value='female'
            className='border-2 border-slate-500 radio'
          />
        </label>
      </div>
    </div>
  )
}

export default GenderRadioBox
