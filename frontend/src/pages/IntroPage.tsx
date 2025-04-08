import { useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { FirstBannerImage } from "../assets/LandingPage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function IntroPage() {

  const nevigatePath = useNavigate();
  const [isActive, setIsActive] = useState<boolean | false>(false);

  const nevigateToUploadVideos = () => {
    setIsActive(!isActive);
    nevigatePath("/singup");
  };

  const textRef1 = useRef<HTMLElement>(null);
  useGSAP(() => {
    gsap.to(textRef1.current,{
      y:260,
      duration:1,
    })
  });

  return (
    <div className="h-full w-full overflow-hidden flex flex-wrap items-center justify-center relative">
      <img
        src="public\ariana-grande-yours-5120x3923-21100.jpeg"
        alt=""
        className="object-cover w-full h-full absolute"
      />
      <div className="w-full h-full  flex flex-col  justify-center items-center absolute  ">
        <strong ref={textRef1} className="text-white text-6xl font-extrabold -top-1 absolute ">
          Discover.Share.Inspire
        </strong>
        <b className="text-white font-semibold">
          "Unleash your creativity, connect with a global audience, and explore
          millions of videos—all in one place."
        </b>
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
  );
}
