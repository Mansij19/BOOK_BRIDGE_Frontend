import React from 'react'
import loginImage from "../assets/loginImage.jpg"
import GoogleIcon from '@mui/icons-material/Google';

const LoginPage = () => {
  return (
  <div className='flex h-dvh '>
    {/* // left side */}
   <div className="bg-blue-700 text-white flex flex-col justify-center items-center w-1/2 p-10">

      <div className="bg-blue-600 rounded-full p-5">
        📖 BookBridge
      </div>
      <div className="text-5xl font-semibold text-center  p-10 flex-col">
        <div>Empowering learners</div>
        <div>through shared</div>
        <div>knowledge.</div>
      </div>

      <div className=''>
        Access thousands of community-driven resources,
        textbooks, and notes designed to bridge the gap in
        modern education.
      </div>

      <div className=''>
        <img src={loginImage} alt="" />
      </div>
    </div>
    {/* // left side */}
    <div className='bg-gray-100 w-1/2 h-screen flex-col justify-baseline p-20 '>
    {/* upper */}
      <div className='p-10 w-105 flex flex-col'>  
        <div className=''>
          <div className='text-4xl font-semibold text-gray-800 '>Welcome back</div>
          <div className='text-sm'>Please enter your details to sign in to your account.</div>
        </div>
        <div className='h-15 p-5 border-2 rounded-2xl bg-white justify-center items-center border-gray-400'>
         <GoogleIcon className="text-2xl gap-2"/>Continue with Google</div>
      </div>
      
      {/* down */}
      <div>
        
      </div>
    </div>
  </div>

  )
}

export default LoginPage