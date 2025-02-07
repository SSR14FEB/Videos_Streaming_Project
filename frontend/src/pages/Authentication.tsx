import Loader from "@/components/Loader";
import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";

function Authentication() {
  const location = useLocation();
  const userName = location.state;
  let intervalRef 
  const [res, setRes] = useState("");
  let ress = "";
  console.log(userName);
  let loder = false;

  const checkVelidation = async () => {
    await fetch(
      `http://localhost:8201/users/find-user?userName=${userName.userName}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setRes(res);
        clearInterval(intervalRef)
      });
  };

  console.log(ress);
  intervalRef = setInterval(checkVelidation, 10000);

  return (
    <div
      className={
        res ? "hidden" : "w-[60vw] h-[70vh] flex justify-center items-center"
      }
    >
      <div className="p-10 w-full h-full sm:w-3/4 sm:h-full border-2 shadow-md flex flex-col justify-center gap-12 items-center rounded-md ">
        <strong className="text-lg font-raleway">
          Check your email and click the link we sent to verify your account!
        </strong>
        <Loader />
      </div>
    </div>
  );
}

export default Authentication;
