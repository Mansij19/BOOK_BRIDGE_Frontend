import React from "react";
import library from "../../../assets/library.jpg";
import pyq from "../../../assets/pyq image.jpg";
import tabimage from "../../../assets/tabimage.jpg";
import bookimage from "../../../assets/book image open.jpg";
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
    </>
  );
};

export default ImageSection;
