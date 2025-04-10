import { FaHome } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { RiPlayList2Fill } from "react-icons/ri";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import SignupButton from "@/components/Signup_Button/SignupButton";
import useLoginHook from "../../custom_hooks/useLoginHook";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GoSignOut } from "react-icons/go";
import { CiSliderVertical } from "react-icons/ci";
export default function Aside() {
  const nevigate = useNavigate();
  const res = useLoginHook() || "";
  const nevigateToLoginPage = () => {
    nevigate("/login");
  };

  const [profile, setProfile] = useState(false);
  const profileMenu = () => {
    setProfile(!profile);
  };
  const singOut = async () => {
    try {
     const response = await fetch("http://localhost:8201/users/logout", {
        method: "POST",
        credentials: "include",
      });
      const res = await response.json()
      console.log("logout",res)
      if(res.statucode == 200){
        nevigate("/login")
      }
    } catch (error) {
      console.log("The JWT error:", error);
    }
  };


  return (
    <div
      className={`w-[15vw]  h-full flex flex-wrap justify-end top-12 bg-white  pb-42 relative`}
    >
      <div className="w-full h-10 flex justify-center items-center gap-5">
        <FaHome size={20} />
        <b className="text-sm font-sans pr-10">Home</b>
      </div>
      <div className=" w-full h-10 flex justify-center items-center gap-5 ">
        <MdSubscriptions size={20} />
        <b className="text-sm font-sans">Subscription</b>
      </div>
      <div className=" w-full h-10 flex justify-center items-center gap-5">
        <RiPlayList2Fill size={20} />
        <b className="text-sm font-sans pr-10">Playlist</b>
      </div>
      <div className=" w-full h-10 flex justify-center items-center gap-5">
        <MdOutlineOndemandVideo size={20} />
        <b className="text-sm font-sans pr-5">Your videos</b>
      </div>
      <div className=" w-full h-10 flex justify-center items-center gap-5">
        <IoMdSettings size={20} />
        <b className="text-sm font-sans pr-10">Setings</b>
      </div>
      {res ? (
        <div
          className=" w-full h-10 flex justify-center items-center gap-5 cursor-pointer"
          onClick={profileMenu}
        >
          <div className="w-9 h-9 rounded-full flex justify-center items-center ">
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
          <p className="text-sm font-bold ">{res.userName}</p>
          <CiSliderVertical size={15} />
        </div>
      ) : (
        <div
          className=" w-full h-10 flex felx-warp justify-center items-center gap-5"
          onClick={nevigateToLoginPage}
        >
          <div className="flex justify-center items-center">
            <SignupButton />
          </div>
        </div>
      )}

      <div
        className="w-full h-52 relative  justify-center items-center gap-5 cursor-pointer  ">
        <div
        className={`${profile?"w-full h-full flex-col justify-center items-start gap-5 cursor-pointer":"hidden"} `}
        onClick={singOut}
      >
        <div className="w-full h-10 flex justify-center items-center  rounded-sm">
        <GoSignOut size={20} />
        <p className="text-sm font-sans pr-10">Sign out</p>
        </div>
        <div className="w-full h-10 flex justify-center items-center  rounded-sm">
        <IoMdSettings size={20} />
        <b className="text-sm font-sans pr-10">Setings</b>
      </div>
        </div>
     </div>
    </div>
  );
}
