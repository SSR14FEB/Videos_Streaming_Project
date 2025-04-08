import { IoMdSearch } from "react-icons/io";
function search() {
  return (
    <search className=" ml-24 sm:w-[600px] sm:h-10 flex justify-center items-center">
    <input
      type="search"
      placeholder="Search"
      className="w-4/6 h-full rounded-l-3xl  border-slate-300 border-2 border-r-0 pl-5 pr-5 focus-within:outline-none "
    />
    <div className="h-full w-16 bg-white  border-slate-300 border-2 rounded-r-3xl flex justify-center items-center ">
    <IoMdSearch color="black" size={25} className="" />
    </div>
  </search>
  )
}

export default search
