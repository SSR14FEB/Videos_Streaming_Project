import Card from "@/components/card/Card";
import Search from "@/components/ui/search";
function HeroPage() {
  return (
    <>
      <header className="w-full h-28 flex justify-center items-center">
      <Search/>
      </header>
      <div className="w-full h-screen flex flex-wrap border-black justify-center items-start gap-10 p-20 overflow-y-auto scroll-smooth">
        <Card />
      </div>
    </>
  );
}

export default HeroPage;
