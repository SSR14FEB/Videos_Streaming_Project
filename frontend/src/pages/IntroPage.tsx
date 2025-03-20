import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {FirstBannerImage} from "../assets/LandingPage"

export default function IntroPage() {
  const nevigatePath = useNavigate();
  const [isActive, setIsActive] = useState<boolean|false>(false);
  const nevigateToUploadVideos = () => {
    setIsActive(!isActive);
    nevigatePath("/singup");
  }
  return (
    <div className='h-full w-4/5 overflow-hidden flex flex-wrap items-center justify-center relative'>
      <img src={FirstBannerImage} alt=""  className='object-cover w-full h-full absolute -z-10 repeat-0' />
      <div className='w-full h-full flex flex-col  justify-center items-center absolute  '>
        <strong className='text-white text-6xl font-extrabold'>
            Discover.Share.Inspire
        </strong> 
        <b className='text-white font-semibold'>"Unleash your creativity, connect with a global audience, and explore millions of videos—all in one place."</b>
        <div
      className={`w-28 h-9 rounded-full flex flex-wrap justify-center gap-2 items-center focus-visible:outline cursor-pointer focus-visible:outline-indigo-400 focus-visible:outline-1 border-white border-2 hover:bg-indigo-400  ${
        isActive ? "bg-indigo-500 text-white" : "" 
      }`}
      onClick={nevigateToUploadVideos}
    >
      <p className=" font-semibold text-white">Get Started</p>
    </div>
      </div>
      
    </div>
  )
}

