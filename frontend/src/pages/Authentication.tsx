import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Authentication() {
const navigate = useNavigate()
useEffect(()=>{
  setTimeout(()=>{
    navigate("/login")
    console.log("hello world")
  },10000)
},[])
  return (
     <div className="w-screen h-screen flex flex-wrap justify-center items-center">
        <h2 className="text-indigo-600">
        "Please check your registered email to verify your account."
        </h2>
     </div>
  );
}

export default Authentication;
