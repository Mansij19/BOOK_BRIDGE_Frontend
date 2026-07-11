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
    <footer className="w-full border-t-2 border-gray-200 bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-start">
        
        {/* Left Side */}
        <div className="max-w-xs">
          <div className="text-3xl font-bold text-black">
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
       <div className="flex flex-col text-gray-600 bottom-left ">
          @2026 Book Bridge.Empowering learners everywhere.
        </div>
    </footer>
  );
};
export default Footer