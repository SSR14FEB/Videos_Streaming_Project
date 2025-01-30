function ResetPassword() {
  return (
    <div className=" border w-screen-md h-full flex flex-wrap justify-center items-center shadow-indigo-4000 shadow-md">
      <form action="" className='p-24 '>
        <div className='text-left mt-2'>
          <label htmlFor="new" className='left'>New Password</label>
          <input type="password" id='new' className='border rounded-sm flex focus-visible:outline focus-visible:outline-2  focus-visible:outline-indigo-500'/>
        </div>
        <div className='text-left mt-2'>
          <label htmlFor="confirm">
            confirm Password
          </label>
          <input type="text" id='confirm' className='border rounded-sm flex focus-visible:outline focus-visible:outline-2  focus-visible:outline-indigo-500' />
        </div>
        <div className='h-full top-2 w-ful flex flex-wrap justify-end mt-2'>
        <button className='bg-indigo-600  p-1 rounded-md text-white font-semibold hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 '>
          Save
        </button>
        </div>
      </form>
    </div>
  )
}

export default ResetPassword
