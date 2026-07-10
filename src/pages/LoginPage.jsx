import React from 'react'
import loginImage from "../assets/loginImage.jpg"

const LoginPage = () => {
  return (
    // left side
   <div className="bg-blue-700 text-white flex flex-col justify-center items-center px-16 relative w-1/2 py-16">

      <div className="bg-white/10 rounded-full px-4 py-2 ">
        📖 BookBridge
      </div>
      <div className="text-5xl font-bold text-center  p-10">
        Empowering learners through shared knowledge.
      </div>

      <div>
        Access thousands of community-driven resources,
        textbooks, and notes designed to bridge the gap in
        modern education.
      </div>

      <div>
        <img src={loginImage} alt="" />
      </div>
      

    </div>

  )
}

export default LoginPage