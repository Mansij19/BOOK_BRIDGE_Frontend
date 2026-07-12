import React from 'react'
import FooterList from "./FooterList";
const Footer = () => {
   const data = [
  {
    header: "RESOURCES",
    items: ["Books", "Handwritten Notes", "Past Papers", "PDF Library"],
  },
  {
    header: "COMMUNITY",
    items: ["Mission", "Leaderboard", "Success Stories", "Guidelines"],
  },
  {
    header: "LEGAL",
    items: ["Privacy Policy", "Terms of Service", "Help Center"],
  },

];
    return (
   
        <>
        <div className='flex justify-center items centre w-full px-5 bg-gray-200'>
        {/* Left Side */}
        <div className="">
          <div className="px-5 text-3xl font-bold text-black">
            BookBridge
          </div>

          <div className="gap-5 text-gray-600 leading-7">
            Connecting students with the knowledge they need. Built by
            students, for students.
          </div>
        </div>

        {/* Right Side */}
        <div className="flex gap-24">
          {data.map((item, index) => (
            <FooterList
              key={index}
              header={item.header}
              items={item.items}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Footer