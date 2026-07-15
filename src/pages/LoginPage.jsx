import React from "react";
import loginImage from "../assets/loginImage.jpg";
import GoogleIcon from "@mui/icons-material/Google";
import LoginCredential from "../components/section/components/LoginCredential";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import Divider from "../components/UI/Divider";
const LoginPage = () => {
  return (
    <div className="flex h-screen w-full min-h-vh">
      {/* // left side */}
      <div className="flex bg-blue-700 h-full w-1/2 flex-col justify-center items-center text-white">
        <div className="flex flex-col gap-5 w-[80%] justify-center items-center ">
          <div className="flex bg-white/10 rounded-3xl px-3 py-2 text-white font-semibold gap-3 text-lg">
            <MenuBookIcon />
            BookBridge
          </div>
          <div className="text-5xl font-semibold text-center gap-3 flex flex-col">
            <div>Empowering learners</div>
            <div>through shared</div>
            <div>knowledge.</div>
          </div>
          <div className="flex flex-col justify-center items-center gap-1 text-lg">
            <div>Access thousands of community-driven resources,</div>
            <div>textbooks, and notes designed to bridge the gap in modern</div>
            <div>education.</div>
          </div>
          <div className="relative flex p-8 justify-center border border-white/10 items-center bg-white/5 rounded-2xl ">
          <div className="absolute -bottom-4 -right-4 min-w-fit rounded-lg p-3 border border-indigo-300 bg-white text-blue-700">Join Over</div>
            <img className="rounded-2xl " src={loginImage} alt="image" />
          </div>
        </div>
      </div>

      {/* // right side */}
      <div className="flex bg-gray-100 h-full w-1/2 gap-10 flex-col justify-center items-center">

        {/* upper */}
        <div className="flex flex-col w-[60%] justify-center items-center gap-6">
          <div className="w-full">
            <div className="w-full text-4xl font-semibold text-gray-800 ">
              Welcome back
            </div>
            <div className="w-full text-sm">
              Please enter your details to sign in to your account.
            </div>
          </div>
          <div className="w-full py-3 border-2 rounded-2xl gap-2 bg-white flex justify-center items-center border-gray-400">
            <GoogleIcon className="text-2xl" />
            <span>Continue with Google</span>
          </div>
        </div>
        <div className="w-[60%] flex justify-center gap-2 items-center text-gray-400 font-semibold">
          <Divider />
          <div className="min-w-fit">OR CONTINUE WITH EMAIL</div>
          <Divider />
        </div>

        {/* down */}
        <div className="flex flex-col w-[60%] justify-center items-center ">
          <LoginCredential />
        </div>
        <button className="w-[60%] py-3 border-2 rounded-2xl gap-2 bg-blue-500 text-white flex justify-center items-center">
          Sign In
          <ArrowForwardIcon size="" fontSize="medium" />
        </button>
        <div className="flex gap-3 font-semibold text-lg">
          <div className="text-gray-500">Don't have an account?</div>
          <div className="text-blue-600">Register for free</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
