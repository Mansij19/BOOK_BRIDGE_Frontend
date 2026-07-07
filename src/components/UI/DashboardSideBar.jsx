import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import GroupsIcon from "@mui/icons-material/Groups";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
const DashboardSideBar = () => {
  const sideItems = [
    { to: "/profile", icon: <DashboardIcon />, label: "Home" },
    { to: "/uploads", icon: <CloudUploadIcon />, label: "My Uploads" },
    { to: "/messages", icon: <ChatBubbleIcon />, label: "Messages" },
    { to: "/community", icon: <GroupsIcon />, label: "Community" },
  ];

  return (
    <>
      <aside className="w-72 h-screen border-r border-gray-200 bg-white flex flex-col items-center justify-between">
        <div className="w-full">
          <div className="text-3xl flex items-center gap-4 w-full px-5 py-3 font-bold text-blue-500">
            <Link className="w-full flex items-center gap-4 px-5 py-3" to="/">
              {" "}
              BookBridge{" "}
            </Link>
          </div>

          <div className="px-4 space-y-2">
            {sideItems.map((item, index) => (
              <Link to={item.to} key={index}>
                <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition cursor-pointer">
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full">
          <div className="mx-8 my-8 border-t border-gray-200"></div>

          <div className="px-4 space-y-2">
            <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition cursor-pointer">
              <SettingsIcon />
              <span className="font-medium">Settings</span>
            </button>

            <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition cursor-pointer">
              <HelpIcon />
              <span className="font-medium">Help</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSideBar;
