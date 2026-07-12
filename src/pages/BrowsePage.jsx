import React from "react";
import BrowseResources from "../components/section/components/BrowseResources";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import GridViewIcon from "@mui/icons-material/GridView";
import ViewListIcon from "@mui/icons-material/ViewList";
const BrowsePage = () => {
  return (
    <div className="flex w-full bg-gray-100 gap-4 overflow-hidden min-h-screen p-5">
      {/* left items */}
      <div className="flex flex-col h-screen w-1/3 ">
        <div className="text-2xl font-semibold text-gray-800">
          {" "}
          Discover Educational Resources{" "}
        </div>
        <div className="text-black">
          Explore thousands of verified study materials from top universities.
        </div>
        <div className="flex flex-col gap-3 text-lg">
          <div className="flex font-semibold text-gray-400">SUBJECT</div>
          <div className="flex flex-wrap justify-start gap-2">
            <div className="flex px-3 py-1 w-max rounded-2xl bg-blue-200">
              All
            </div>
            <div className="flex px-3 py-1 w-max rounded-2xl bg-blue-200">
              Computer Science
            </div>
            <div className="flex px-3 py-1 w-max rounded-2xl bg-blue-200">
              Engineering
            </div>
            <div className="flex px-3 py-1 w-max rounded-2xl bg-blue-200">
              Business
            </div>
          </div>
          <div className="font-semibold text-gray-400 gap-1">RESOURCE TYPE</div>
          <div className="flex gap-2">
            <input type="checkbox" />
            Books
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            Notes
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            Pyqs
          </div>
          <div className=" text-gray-400 gap-1 font-semibold">INSTITUTION</div>
          <div className="flex w-full py-3 border-2 rounded-2xl p-2">
            Select University
            <span></span>
          </div>
        </div>
      </div>

      {/* right items */}
      <div className="flex flex-col w-full gap-5">
        <div className="flex justify-between items-centre bg-white px-4 py-4 rounded-2xl">

          <div className="flex text-center">Showing 124 results</div>
          
          <div className="flex">
            <div className="text-gray-500 font-semibold">Sort by:</div>
            <div>drop</div>
            <div>icons</div>
          </div>
        </div>
        
        <BrowseResources />
      </div>
    </div>
  );
};

export default BrowsePage;
