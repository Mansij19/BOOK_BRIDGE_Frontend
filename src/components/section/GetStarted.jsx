import React from "react";
import SectionHeader from "../UI/SectionHeader";
const GetStarted = () => {
  return (
   <div className="w-full mx-auto px-5 pb-10">
       <div className="flex flex-col  gap-10 py-20 items-center justify-center rounded-3xl bg-blue-700 text-white">
      <div className="font-medium  max-h-10/12 ">
        <SectionHeader
          title={"Join largest Student Community"}
          description={
            "Start sharing, learning, and bridging the gap between resources and students today."
          }
        />
      </div>
      <div className="flex gap-5 items-center justify-center"> 
        <button className=" w-70 py-8 font-semibold rounded-xl text-blue-700 bg-white text-blue   -700 cursor-pointer border-0">
          Get Started for free
        </button>
        <button className="w-70 py-8 rounded-xl bg-blue-700 text-white border-white cursor-pointer border-2 ">
          Explore Resources
        </button>
      </div>
    </div>
   </div>
  );
};

export default GetStarted;
