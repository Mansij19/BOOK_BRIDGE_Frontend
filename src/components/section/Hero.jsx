import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Analytics from "./components/Analytics";
import CustomButton from "../UI/NavBar/Button";
import ImageSection from "./components/ImageSection";
// import ImageSection from "./components/ImageSection";
function Hero() {
  const analyticsData = [
    { count: "1M+", title: "Active Students" },
    { count: "500K+", title: "Shared Notes" },
    { count: "100K+", title: "Uploaded Books" },
  ];
  return (
    <>
    <section className="bg-gray-100 flex flex-col items-center justify-center pt-10">
      <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-6 py-3">
        <span className="text-lg font-medium text-blue-500">
          The Future of Student Learning
        </span>
      </div>
      <div>
        <h1 className="mt-6 text-5xl font-bold text-center text-black font-Poppins">
          Empowering every Learner
        </h1>
      </div>
      <div className="mt-6 w-1/2 text-center items-center text-black-100 ">
        <p className="text-lg">
          Access thousands of academic resources , from verified textbooks to
          peer-to-peer handwritten notes shared by students.
        </p>
      </div>

      <div className="relative mt-12 w-full max-w-4xl h-16 rounded-xl border border-gray-300 bg-white pl-14 pr-40 text-lg shadow-sm focus:outline-none">
        <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
        <input
          type="text"
          placeholder="Search for books, notes etc..."
          className="w-full h-full pl-14 pr-40 text-lg rounded-xl focus:outline-none" />

        <div className="absolute right-2 top-1/2 -translate-y-1/2 h-12  flex items-center justify-center">
          <CustomButton>
            search
          </CustomButton>
        </div>
      </div>

      <div className=" text-lg mt-6 text-center items-center text-black-100 ">
        <p>Trending : Data Structures , Organic Chemistry , Microeconomics</p>
      </div>

      <div className="mt-12 w-full bg-gray-100 flex flex-row py-20 divide-x-2 justify-center items-center divide-gray-300">
        {analyticsData.map((data, index) => (
          <div key={index} className="flex-1">
            <Analytics count={data.count} title={data.title} />
          </div>
        ))}
      </div>

      

    </section>
    
    <ImageSection />
    </>

  );
}

export default Hero;
