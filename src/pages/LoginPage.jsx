import React from "react";
import loginImage from "../assets/loginImage.jpg";
import GoogleIcon from "@mui/icons-material/Google";

const LoginPage = () => {
  return (
    <div className="flex h-screen w-full min-h-vh">
      {/* // left side */}
      <div className="h-full bg-blue-700 text-white flex flex-col justify-center items-center w-1/2 p-10">
        <div className="bg-blue-600 rounded-full p-5">📖 BookBridge</div>
        <div className="text-5xl font-semibold text-center gap-3 flex flex-col">
          <div>Empowering learners</div>
          <div>through shared</div>
          <div>knowledge.</div>
        </div>

        <div className="">
          Access thousands of community-driven resources, textbooks, and notes
          designed to bridge the gap in modern education.
        </div>

        <div className="">
          <img src={loginImage} alt="" />
        </div>
      </div>
      {/* // left side */}
      <div className="flex bg-gray-100 h-full w-1/2 flex-col justify-center items-center">
        {/* upper */}
        <div className="flex flex-col w-[60%] justify-center items-center">
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

        {/* down */}
        <div></div>
      </div>
    </div>
  );
};

export default LoginPage;
