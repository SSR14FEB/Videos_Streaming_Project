import Card from "@/components/card/Card";
import Search from "@/components/ui/search";
import UploadButton from "@/components/upload-Button/UploadButton";
import Logo from "@/components/Logo/Logo";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import Aside from "../components/aside/Aside"
import { IoNotificationsCircleSharp } from "react-icons/io5";


import useLoginHook from "../custom_hooks/useLoginHook";
import SignupButton from "@/components/Signup_Button/SignupButton";
import { useState } from "react";
import Toast from "@/components/toast/Toast";

function HeroPage() {

  const res = useLoginHook() || "";
  const nevigateTo = useNavigate();
  
  const nevigateToLoginPage = () => {
    nevigateTo("/login");
  };

  const [asideVisual,setAsideVisual] = useState(true)
  const asideFunction=()=>{
    setAsideVisual(!asideVisual)
  }

  return (
    <>
      <header className="sm:min-w-full h-12 flex flex-wrap justify-between items-center bg-white scroll-smooth fixed z-10">
        <div className=" ml-20 w-32 h-full flex   items-center" onClick={asideFunction}  >
        <Logo/>
        </div>
        <Search />
        {res ? (
          <div className="flex gap-2 justify-center items-center abolute mr-28">
            <IoNotificationsCircleSharp
              size={30}
              className="hover:text-indigo-500 hover:animate-out hover:rotate-12 "
            />
            <UploadButton />
            <div className="w-9 h-9 rounded-full">
              <CgProfile
                size={30}
                onClick={nevigateToLoginPage}
                className={`${
                  res.avatar ? "hidden" : "hover:text-indigo-500 cursor-pointer"
                }`}
              />
              <img
                src={res.avatar}
                alt=""
                className={`${
                  res.avatar
                    ? " w-full h-full object-cover rounded-full"
                    : "hidden"
                }`}
              />
            </div>
          </div>
        ) : (
          <div className="flex gap-2 justify-center items-center abolute mr-28">
            <SignupButton />
          </div>
        )}
      </header>
      <div className="h-full w-full flex  items-center overflow-auto ">
     
      <aside className={`h-screen w-[20vw]sticky top-0 bg-white pt-10  flex flex-wrap justify-end items-top ${asideVisual?"hidden":""}`}>
       <Aside/> 
      </aside>
      <div
        className="w-full h-screen flex flex-wrap justify-center items-start pt-12 scroll-smooth bg-white"
      >
        <Toast/>
        <Card />
      </div>
      </div>
    </>
  );
}

export default HeroPage;
