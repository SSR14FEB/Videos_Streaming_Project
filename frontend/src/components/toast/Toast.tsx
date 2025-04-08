

function Toast() {
  return (
    <div className='w-full h-12 overflow-hidden bg-white pl-5'>
      <ul className='font-sans text-sm font-semibold w-full h-12 bg-white overflow-hidden  flex flex-wrap fixed justify-around items-center'>
      <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">All</li>
        <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">Gaming</li>
        <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">Asus</li>
        <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">Vivo</li>
        <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">Movies</li>
        <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">Trailers</li>
        <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">Trending</li>
        <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">Asus</li>
        <li className="border-2 p-1 rounded-md bg-slate-100 cursor-pointer hover:bg-indigo-400 hover:text-white">Amazone</li>
      </ul>
    </div>
  )
}

export default Toast
