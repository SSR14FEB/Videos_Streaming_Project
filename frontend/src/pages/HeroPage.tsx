import Card from "@/components/card/Card";
import Search from "@/components/ui/search";
import ItnroPage from "./ItnroPage";
import UploadButton from "@/components/upload-Button/UploadButton";
import Logo from "@/components/Logo/Logo";
import { CgProfile } from "react-icons/cg";
function HeroPage() {
  return (
    <>
      <header className="sm:w-full h-12 flex justify-between items-center bg-white scroll-smooth fixed shadow-md z-10">
      <Logo/>
      <Search/>
      <div className="flex gap-2 justify-center items-center abolute mr-28">
      <UploadButton/>
      <CgProfile size={30} />
      </div>
      </header>
      <div className="h-[70vh] w-full flex flex-wrap justify-center items-center relative">
        <ItnroPage/>
      </div>
      <div className="w-full h-screen flex flex-wrap border-black justify-center items-start gap-10 p-5  scroll-smooth ">
        <Card />
      </div>
    </>
  );
}

export default HeroPage;
