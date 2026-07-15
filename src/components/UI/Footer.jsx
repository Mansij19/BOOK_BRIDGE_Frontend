import React from "react";
import FooterList from "./FooterList";
import MailIcon from '@mui/icons-material/Mail';
import PublicIcon from '@mui/icons-material/Public';
import TwitterIcon from '@mui/icons-material/Twitter';
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
    <div className="flex flex-col gap-15 bg-gray-200 p-5  ">
      <div className="flex w-full">
        {/* Left Side */}
        <div className="flex w-11/12 justify-between flex-row gap-15">
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold text-black">BookBridge</div>
            <div className=" text-gray-600">
              <div> Connecting students with the</div>
              <div>knowledge they need. Built by</div>
              <div>students, for students.</div>
            </div>
          </div>
          <div className="flex gap-10">
            {data.map((item, index) => (
              <FooterList key={index} header={item.header} items={item.items} />
            ))}
          </div>
        </div>
      </div>
       <div className="flex justify-between text-gray-600">
        <div className="text-gray-600">
          @2026 BookBridge . Empowering learners everywhere.
        </div>
        <div className="flex gap-3">
            <TwitterIcon/>
            <PublicIcon/>
            <MailIcon/>
        </div> 
        </div> 
      </div>
    </>
  );
}
export default Footer;
