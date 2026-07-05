import React from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ currentPath }) => {

  const NavLinks = [
    { name: "Browse", path: "/browse" },
    { name: "Community", path: "/community" },
    { name: "About", path: "/about" },
  ];

  return (
    <ul className="flex items-center gap-5 font-medium text-gray-600">
      {NavLinks.map((link) => (
        <li key={link.path} className={`hover:text-blue-600 ${currentPath === link.path ? "text-blue-600 text-[22px] underline underline-offset-8" : "text-xl"} transition-all duration-100 cursor-pointer`}>
          <Link to={link.path}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};


export default NavLinks;
