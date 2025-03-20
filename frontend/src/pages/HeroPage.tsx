import Card from "@/components/card/Card";
import Search from "@/components/ui/search";
import UploadButton from "@/components/upload-Button/UploadButton";
import Logo from "@/components/Logo/Logo";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import IntroPage from "./IntroPage";
import { IoNotificationsCircleSharp } from "react-icons/io5";
import { nanoid } from 'nanoid'

function HeroPage() {
  const id = nanoid() 
  const nevigateTo = useNavigate();
  const nevigateToLoginPage=()=>{
    nevigateTo("/login")
  }
  return (
    <>
      <header className="sm:w-full h-12 flex justify-between items-center bg-white scroll-smooth fixed shadow-md z-10">
      <Logo/>
      <Search/>
      <div className="flex gap-2 justify-center items-center abolute mr-28">
      <IoNotificationsCircleSharp size={30} className="hover:text-indigo-500 hover:animate-out hover:rotate-12 "/>
      <UploadButton/>
      <CgProfile size={30} onClick={nevigateToLoginPage} className="hover:text-indigo-500 cursor-pointer"/>
      </div>
      </header>
      <div key={id} className="h-[70vh] w-[99vw] flex flex-wrap justify-center items-center relative">
      <IntroPage/>
      </div>
      <div key={id} className="w-full h-screen flex flex-wrap border-black justify-center items-start gap-10 p-5 scroll-smooth ">
        <Card />
      </div>
    </>
  );
}

export default HeroPage;
