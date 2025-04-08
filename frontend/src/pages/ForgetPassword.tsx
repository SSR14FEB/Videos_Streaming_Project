import { useForm, SubmitHandler} from "react-hook-form";
import { GiTireIronCross } from "react-icons/gi";
import { Link } from "react-router";
import {Loader} from "@/components/Loader";
import { useState } from "react";

type Inputs = {
  userCredentials: string;
};
function ForgetPassword() {
  const [userInput, setUserInput] = useState<string>();
  const [button, setButton] = useState<boolean>(false);
  // const [isPending, setIsPending] = useState(false);
  interface ResponseData {
    data: {
      email: string;
      avatar: string;
    };
  }
  
  let [res, setRes] = useState<ResponseData | null>(null);
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("http://localhost:8201/users/forgect_password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        setTimeout(() => {
          setRes(res);

        }, 3000);
      });
  };

  let userName,
    domainName = "";
  const email = res?.data?.email || "";
  const avatar = res?.data?.avatar || "";
  console.log(avatar);
  if (email) {
    const parts = email.split("@");
    userName = parts[0].slice(0, 4) + "****@";
    domainName = parts[1];
  }
  return (
    <div className="w-full h-full flex flex-wrap justify-center items-center ">
    <div className="w-[60vw] h-[70vh] flex flex-wrap m-20 justify-center items-center">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="p-5 w-full h-full sm:w-3/4 sm:h-full border-2 shadow-xl flex flex-col justify-between rounded-sm"
      >
        <div
          className={`p-5 w-full h-full ${
            userInput && button ? "hidden" : "flex"
          } flex-col justify-between rounded-sm duration-1000 transition-all `}
        >
          <div className="font-bold text-2xl text-indigo-600 h-full w-full flex justify-between">
            StreaMer
            <Link to={"/login"} className="">
              <GiTireIronCross className="animation hover:animate-spin animate-out" />
            </Link>
          </div>
          <div className="text-left w-full">
            <label htmlFor="find" className="font-bold text-2xl">
              Find your account.
            </label>
            <p className=" mt-4  ">
              Enter the email,and username associated with your account to
              change your password.
            </p>
          </div>
          <div className="mt-14 ">
            <input
              type="text"
              id="find"
              placeholder="Email address, @username"
              className=" rounded-sm p-2 w-full border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500  "
              {...register("userCredentials")}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUserInput(event.currentTarget.value);
              }}
            />
          </div>
          <div className="w-full h-full flex flex-wrap justify-center items-end">
            <button
              className="w-3/4 h-1/3 rounded-2xl bg-indigo-600 text-white text-lg font-bold hover:bg-indigo-500"
              disabled={!userInput}
              onClick={() => {
                setButton(true);
              }}
            >
              Next
            </button>
          </div>
        </div>

        {/* Loader */}
        {res?"":<div
          className={` ${
            userInput && button ? " w-full h-full flex flex-wrap justify-center  items-center " : "hidden h-none w-none"
          } `}
        >
          <div className={res ? "hidden": "flex"}>
            <Loader  />
          </div>
        </div>}

        <div
          className={`p-5 w-full h-full ${
            userInput && button && res ? "flex" : "hidden"
          } flex-col justify-between rounded-sm items-center `}
        >
          <div className="h-24 w-24 flex justify-center border-white border-4 rounded-full shadow-xl overflow-hidden ">
            <img
              src={`${avatar}`}
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <p className="font-semibold">{userName + domainName}</p>
          <p>We sent an email to with a link to get back into your account.</p>
          <div className="w-full h-1/3 flex flex-wrap justify-center items-end">
            <button
              className="w-3/4 h-1/4 rounded-2xl bg-indigo-600 text-white text-lg font-bold hover:bg-indigo-500"
              disabled={!userInput}
              onClick={() => {
                setButton(true);
              }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}

export default ForgetPassword;
