import { useEffect, useState } from "react";
import { useRef } from "react";
export default function Card() {
  const [videoUrl, setVideoUrl] = useState("");
  const [cardData, setCardData] = useState([]);
  const videoRef = useRef<HTMLVideoElement>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:8201/videos/pages", {
          method: "GET",
        });
        const res = await response.json();
        setCardData(res.data.docs || []);
        setVideoUrl(res?.data?.docs?.[0]?.videoFile || "");
      } catch (error) {
        console.log("error while loading card document", error);
      }
    })();
  }, []);

  console.log(cardData);
  const handleMouseEnter = (index) => {
    if (videoRef.current[index]) {
      videoRef.current[index].muted = true; // Important for autoplay
      videoRef.current[index].play();
    }
  };

  const handleMosueLeave = (index) => {
    if (videoRef.current[index]) {
      videoRef.current[index].pause();
      videoRef.current[index].currentTime = 0;
      videoRef.current[index].load();
    }
  };

  return( 
    cardData.map((file,index)=>
      <div
      key={index}
      className="w-96 h-72 rounded-2xl flex flex-wrap justify-center  "
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMosueLeave(index)}
      >
        <div className="  w-full h-3/5">
          {videoUrl ? (
            <video
              ref={(el)=>(videoRef.current[index] =el)}
              poster={file.thumbnail}
              className="w-full h-full object-cover rounded-md"
            >
              <source src={file.videoFile} type="video/mp4" />
            </video>
          ) : (
            <p>vidoe is loading</p>
          )}
        </div>
        <div className=" h-1/5 w-full flex flex-wrap justify-start items-center gap-2">
          <div className="w-12 h-full rounded-full bg-gray-400 flex flex-wrap justify-center items-center">
            <strong className="text-white">SK</strong>
          </div>
          <div className="flex flex-col">
            <b>{file.title}</b>
            <b>{file.owner}</b>
          </div>
        </div>
        <div className=" w-full h-fit ">
          <p className="ml-14">5.1M views 4 years ago</p>
        </div>
      </div>
    )
)
}
