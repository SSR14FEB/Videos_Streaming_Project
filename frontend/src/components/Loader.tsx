import { MutatingDots } from "react-loader-spinner";

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

export default Loader;
