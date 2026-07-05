import React from "react";
import SearchIcon from "@mui/icons-material/Search";
function Hero() {
  return (
    <section className="bg-gray-100 flex flex-col items-center justify-center px-10 py-16">
      <div className="inline-flex items-center justify-center rounded-full bg-blue-100 px-6 py-3">
        <span className="text-xl font-medium text-blue-500">
          The Future of Student Learning
        </span>
      </div>
      <div>
        <h1 className="mt-6 text-6xl font-bold text-center text-black font-Poppins">
          Empowering every Learner
        </h1>
      </div>
      <div className="mt-6 text-center items-center text-black-100 ">
        <p className="text-lg">
          Access thousands of academic resources , from verified textbooks to
          peer-to-peer handwritten notes shared by students.
        </p>
      </div>

      <div className="relative mt-12 w-full max-w-5xl">
        
        <SearchIcon className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-3xl" />

        <input
          type="text"
          placeholder="Search for books, notes etc..."
          className="w-full h-25 rounded-xl border border-gray-300 bg-white pl-14 pr-40 text-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button className="absolute right-2 top-1/2 -translate-y-1/2 h-12 px-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700">
          Search
        </button>
      </div>
      <div className=" text-lg mt-6 text-center items-center text-black-100 ">
      <p>Trending : Data Structures , Organic Chemistry , Microeconomics</p>
      </div>
      <div className="mt-12 w-full bg-gray-200 flex flex-row">
        <p className="ml-4 text-5xl text-blue-500 font-semibold">10k+ </p>
        
        <p className="ml-4 text-5xl text-blue-500 font-semibold">BOOKS SHARED </p>
      </div>
    </section>
    

  );
}

export default Hero;
