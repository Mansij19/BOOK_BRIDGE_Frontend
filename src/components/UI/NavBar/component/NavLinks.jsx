import React from "react";

const NavLinks = () => {
  return (
    <ul className="flex items-center gap-5 text-xl font-medium text-gray-600">
      <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
        Browse{" "}
      </li>
      <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">
        Community
      </li>
      <li
        className="hover:text-blue-600 transition-colors duration-300 cursor-pointer"
      >
        About
      </li>
    </ul>
  );
};

export default NavLinks;
