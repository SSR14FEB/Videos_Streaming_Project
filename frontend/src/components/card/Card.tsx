import { useEffect, useState } from "react";
import { useRef } from "react";
export default function Card() {
  const [videoUrl, setVideoUrl] = useState("");
  interface CardData {
    videoFile: string;
    thumbnail: string;
    avatar: string;
    title: string;
    userName: string;
  }

  const [cardData, setCardData] = useState<CardData[]>([]);
  const videoRef = useRef<(HTMLVideoElement | null)[]>([]);

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
  const handleMouseEnter = (index: number) => {
    if (videoRef.current[index]) {
      videoRef.current[index].muted = true; // Important for autoplay
      videoRef.current[index].play();
    }
  };

  const handleMosueLeave = (index:number) => {
    if (videoRef.current[index]) {
      videoRef.current[index].pause();
      videoRef.current[index].currentTime = 0;
      videoRef.current[index].load();
    }
  };

  return( 
 <div className="w-full h-full flex flex-wrap justify-start pl-20 gap-10 items-center  scroll-smooth">
     {cardData.map((file,index)=>
      <div
      key={index}
      className="w-80 h-80 rounded-2xl flex flex-wrap justify-center scroll-smooth"
      onMouseEnter={()=>handleMouseEnter(index)}
      onMouseLeave={()=>handleMosueLeave(index)}
      >
        <div className=" w-full h-3/5">
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
        <div className=" h-12 w-full flex flex-wrap justify-start items-center gap-2 ml-2">
          <div className="w-12 h-full rounded-full bg-gray-400 flex flex-wrap justify-center items-center border-white">
            <img className="h-full w-full object-cover rounded-full" src={file.avatar} alt="" />
          </div>
          <div className="flex flex-col">
            <b>{file.title}</b>
            <b className="text-gray-600">{file.userName}</b>
          </div>
        </div>
        <div className="  w-full h-fit ">
          <p className="ml-16">5.1M views 4 years ago</p>
        </div>
      </div>
    )}
 </div>
)
}
