import React from "react";

const Analytics = ({ count, title }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <p className="ml-4 text-5xl text-[#2563EB] font-semibold">{count}</p>
        <p className="ml-4 text-xl text-[#000000] font-semibold">
          {title}
        </p>
      </div>
    </>
  );
};

export default Analytics;
