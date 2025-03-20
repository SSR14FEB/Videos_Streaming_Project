import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function UploadButton() {
  const nevigatePath = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const nevigateToUploadVideos = () => {
    setIsActive(!isActive);
    nevigatePath("/upload");
  };
  return (
    <div
      className={`w-28 h-10 rounded-full flex flex-wrap justify-center gap-2 items-center focus-visible:outline cursor-pointer focus-visible:outline-indigo-400 focus-visible:outline-1 border${
        isActive ? "bg-indigo-500 text-white" : ""
      }`}
      onClick={nevigateToUploadVideos}
    >
      <p className=" font-semibold">Upload</p>
    </div>
  );
}
