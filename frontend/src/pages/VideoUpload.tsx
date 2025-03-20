import { PhotoIcon} from "@heroicons/react/24/solid";
import { useState } from "react";
type file = {
  thumbnail: FileList;
  video: FileList;
};
function VideoUpload() {
  
  const [thumbnail, setThumbnail] = useState("");
  const thumbnailImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files ? event.target.files[0] : "";
    if (image instanceof File) {
      setThumbnail(URL.createObjectURL(image));
    }
  };

  const [video, setVideo] = useState("");
  const uploadVideo = (event: React.ChangeEvent<HTMLInputElement>) => {
    const videoFile = event.target.files ? event.target.files[0] : "";
    if (videoFile instanceof File) {
      setVideo(() => URL.createObjectURL(videoFile));
    }

  };
console.log(video)
  return (
    <div className="w-screen h-screen flex flex-wrap justify-center items-center">
      <form
        action=""
        className="w-full h-full sm:w-3/4 sm:h-3/4 border-2 shadow-xl rounded-sm grid grid-cols-2 "
      >
        <div className=" h-full w-full  col-span-1 ">
          <strong className="mt-8 p-1">Details</strong>
          <div className="mt-8 w-4/5 border h-20  flex flex-col justify-self-center rounded-md">
            <label htmlFor="title" className="font-bold">
              Title
            </label>
            <input
              type="text"
              className=" pl-2 pb-8 outline-none  w-full h-full rounded-2xl"
            />
          </div>
          <div className="mt-5 w-4/5 border h-32 flex flex-col justify-self-center rounded-md">
            <label htmlFor="Discription" className="font-bold">
              Discription
            </label>
            <textarea
              className=" resize-none pl-2 pb-8 outline-none w-full h-full rounded-2xl"
            />
          </div>
          <div className="mt-5 w-4/5 border h-32 flex flex-col items-center justify-center justify-self-center rounded-md relative">
            <PhotoIcon
              aria-hidden="true"
              className="mx-auto size-12 text-gray-300"
            />
            <label
              htmlFor="Thumbnail"
              className={`font-bold absolute bottom-5 ${
                thumbnail
                  ? "text-white"
                  : "text-indigo-500 hover:text-indigo-400"
              }`}
            >
              Upload Thumbnail
            </label>
            <input
              type="file"
              accept="image/*"
              id="Thumbnail"
              className="hidden text-warp"
              onChange={thumbnailImage}
            />
            <img
              src={thumbnail}
              alt=""
              className={`${
                thumbnail
                  ? "h-full w-full absolute -z-10 object-cover"
                  : "hidden"
              }`}
            />
          </div>
          <button
            type="submit"
            className="w-[80%] grid h-10 mt-5 border justify-self-center items-center rounded-md bg-indigo-600 text-white font-bold hover:bg-indigo-500"
          >
            Next
          </button>
        </div>

        {/* second column */}

        <div className="h-full w-full col-span-1">
          <div className=" mt-14 w-4/5 border h-52 flex flex-col items-center justify-center  justify-self-center rounded-md relative">
            <PhotoIcon
              aria-hidden="true"
              className={`${
                video ? "hidden" : "mx-auto size-12 text-gray-300"
              }`}
            />
            <label
              htmlFor="Video"
              className={`font-bold absolute z-10 bottom-5 ${
                video ? "text-white" : "text-indigo-500 hover:text-indigo-400"
              }`}
            >
              {video ? "Change Video" : "Upload Video"}
            </label>
            <input
            key={thumbnail}
              type="file"
              accept="video/*"
              id="Video"
              className="hidden"
              onChange={uploadVideo}
            />
            {video ? (
              <video key={video}
                className="h-full w-full absolute  object-cover rounded-sm"
                controls
              >
                <source src={video} type="video/mp4" />
              </video>
            ) : (
              ""
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default VideoUpload;
