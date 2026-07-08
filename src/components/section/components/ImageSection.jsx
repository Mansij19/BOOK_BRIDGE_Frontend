import React from "react";
import library from "../../../assets/library.jpg";
import pyq from "../../../assets/pyq image.jpg";
import tabimage from "../../../assets/tabimage.jpg";
import bookimage from "../../../assets/book image open.jpg";
import pysicsbook from "../../../assets/pysicsbook.jpg"
import eco from "../../../assets/eco book.jpg"
import mathsformula from "../../../assets/mathsformula.jpg"
import dsabook from "../../../assets/dsabook.jpg"

import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ImageSection = () => {
  return (
    <>
      <div className="ml-5 mt-10">
        <p className="text-3xl">Browse by category</p>
        <p>Find exactly what you need to ace your next exam</p>
      </div>

      <div className="mx-5 mt-8 grid grid-cols-[1.4fr_1fr_1fr] grid-rows-2 gap-4 h-[650px]">
        <div className="relative row-span-2 rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={library}
            alt="Books"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

          <div className="absolute bottom-8 left-8 text-white">
            <h2 className="text-4xl font-bold">Books</h2>
            <p className="text-lg mt-2">
              Standard textbooks & reference guides
            </p>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={bookimage}
            alt="Notes"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <h3 className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
            Handwritten Notes
          </h3>
        </div>

        <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={pyq}
            alt="PYQs"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <h3 className="absolute bottom-5 left-5 text-white text-2xl font-semibold">
            PYQs
          </h3>
        </div>

        <div className="relative col-span-2 rounded-2xl overflow-hidden group cursor-pointer">
          <img
            src={tabimage}
            alt="PDFs"
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

          <h3 className="absolute bottom-5 left-5 text-white text-3xl font-semibold">
            PDFs & Research
          </h3>
        </div>
     

      </div>
      
       <div className="ml-5 mt-20 flex flex-col items-center">
        <p className="text-3xl">Featured Resources</p>
        <p className="text-lg mt-4">Handpicked top rated resources trending across campuses this week</p>
      </div>
      {/* <div className="mx-5 mt-8 w-30 h-50 gap-4 grid grid-cols-[1.4fr_1fr_1fr] grid-rows-2 gap-4 h-[650px]">
        <img src={pysicsbook} alt="Physics Book" className="w-full h-full object-cover rounded" />
        <img src={eco} alt="Economics Book" className="w-full h-full object-cover rounded" />
      </div> */}
       <div className="ml-5 mt-40 flex flex-col items-center">
        <p className="text-3xl">How It Works</p>
        <p className="text-lg mt-4">Three simple steps to join and start learning</p>
      </div>
       <div className="ml-30 mt-30 flex flex-row  justify-center items-center gap-10">
        <div className="flex flex-col items-center ">
        <icon className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-300 text-blue-800 size-9">
          <SearchIcon size="large" fontSize="large" />
        </icon>
        <p className="text-2xl mt-4 font-medium">Find</p>
        <p className="text-center justify-center">Use our smart filters to find specific books , notes, pyqs for your exact course and need. </p>
        </div>
        <div className="flex flex-col items-center">
          <icon className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-300 text-blue-800 size-9">
            <SendIcon size="large" fontSize="large" />
          </icon>
          <p className="text-2xl mt-4 font-medium">Request</p>
          <p className="text-center justify-center">Explore our curated collection of study materials across various subjects and difficulty levels. </p>
        </div>
        <div className="flex flex-col items-center">
          <icon className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-300 text-blue-800 size-9">
            <ArrowForwardIcon size="large" fontSize="large" />
          </icon>
          <p className="text-2xl mt-4 font-medium">Exchange</p>
          <p className="text-center justify-center">Explore our curated collection of study materials across various subjects and difficulty levels. </p>
        </div>
      </div>
      

      
      
    </>
  );
};

export default ImageSection;
