import { IoMdSearch } from "react-icons/io";
function search() {
  return (
    <search className=" w-[600px] h-10 flex justify-center items-center">
    <input
      type="search"
      placeholder="Search"
      className="w-4/6 h-full rounded-l-3xl border-indigo-200 border-2 border-r-0 pl-5 pr-5 focus-within:outline-none "
    />
    <div className="h-full w-16 bg-gradient-to-r from-slate-400 to-indigo-600 border-indigo-600 boredr-2 rounded-r-3xl flex justify-center items-center ">
    <IoMdSearch color="white" size={25} />
    </div>
  </search>
  )
}

export default search
