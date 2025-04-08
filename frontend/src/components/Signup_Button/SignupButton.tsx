import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
export default function SignupButton() {
  const nevigatePath = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const nevigateToUploadVideos = async() => {
    setIsActive(!isActive);
    nevigatePath("/login");
  };
  return (
    <div
      className={` rounded-full flex flex-wrap justify-center gap-2 items-center focus-visible:outline cursor-pointer focus-visible:outline-indigo-400 focus-visible:outline-1 border${
        isActive ? "bg-indigo-500 text-white" : ""
      }`}
      onClick={nevigateToUploadVideos}
    >
      <CgProfile size={30}/>
      <p className=" pr-10 font-semibold">Sign up</p>
    </div>
  );
}

