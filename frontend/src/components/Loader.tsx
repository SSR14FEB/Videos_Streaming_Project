import { MutatingDots,Oval} from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4f46e5"
        secondaryColor="#4f46e5"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

function Loader2() {
  return (
    <div>
      <Oval
        visible={true}
        height="50"
        width="50"
        color="#4f46e5"
        ariaLabel="oval-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export{
  Loader,
  Loader2,
};
