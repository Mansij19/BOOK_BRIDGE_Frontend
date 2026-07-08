import React from "react";

const FooterList = ({ header, items }) => {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-sm font-semibold uppercase text-blue-700">
        {header}
      </h3>

      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <p
            key={index}
            className="text-sm text-gray-600 hover:text-blue-700 cursor-pointer transition"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterList;