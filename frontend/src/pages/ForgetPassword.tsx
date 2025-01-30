import { useForm, SubmitHandler, set } from "react-hook-form";
import { GiTireIronCross } from "react-icons/gi";
import { Link } from "react-router";
import Loader from "@/components/Loader";
import { ChangeEvent, InputHTMLAttributes, useEffect, useState } from "react";

type Inputs = {
  example: string;
  exampleRequired: string;
};
function ForgetPassword() {
  const [userInput, setUserInput] = useState<String>();
  const [button, setButton] = useState<boolean>(false);
  const [isPending, setIsPending] = useState(false);
  let [res, setRes] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await fetch("http://localhost:8201/users/find-user", {
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
        setTimeout(()=>{
          setRes(res);
        },1000)
      });
  };
  const email = res?.data?.email
  return (
    <div className="w-[60vw] h-[70vh] flex justify-center items-center">
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
            <p className=" mt-4">
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

        {/* Loder */}

        <div
          className={`p-5 w-full h-full ${
            userInput && button ? "flex" : "hidden"
          } flex-col justify-center rounded-sm items-center `}
        >
          <div className={res ? "hidden" : "relative"}>
            <Loader />
          </div>
          <p>{email}</p>
        </div>
      </form>
    </div>
  );
}

export default ForgetPassword;
