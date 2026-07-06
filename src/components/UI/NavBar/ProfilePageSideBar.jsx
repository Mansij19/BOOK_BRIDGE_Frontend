import React from 'react'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupsIcon from '@mui/icons-material/Groups';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from "@mui/material/IconButton";
import AddIcon from '@mui/icons-material/Add';
// import NavBar from '../components/UI/NavBar/NavBar';
import NavBar from "./NavBar";
const SideBar = () => {
  return (
    <>
    <NavBar />
    <aside className="w-72 min-h-screen border-r border-gray-200 bg-white flex flex-col justify-between">
      {/* Top */}
      <div>
        {/* Heading */}
        <div className="px-8 pt-10 pb-8">
          <h2 className="text-3xl font-bold text-blue-500">Dashboard</h2>
          <p className="text-gray-600 mt-1">Manage your resources</p>
        </div>

        {/* Menu */}
        <div className="px-4 space-y-2">
          <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition">
            <DashboardIcon />
            <span className="font-medium">Home</span>
          </button>

          <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition">
            <CloudUploadIcon />
            <span className="font-medium">My Uploads</span>
          </button>

          <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition">
            <ChatBubbleIcon />
            <span className="font-medium">Messages</span>
          </button>

          {/* Active Item */}
          <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition">
            <GroupsIcon />
            <span className="font-semibold">Community</span>
          </button>
        </div>

        {/* Divider */}
        <div className="mx-8 my-8 border-t border-gray-200"></div>

        {/* Bottom Menu */}
        <div className="px-4 space-y-2">
          <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition">
            <SettingsIcon />
            <span className="font-medium">Settings</span>
          </button>

          <button className="flex items-center gap-4 w-full px-5 py-3 rounded-xl text-gray-700 hover:bg-gray-100 transition">
            <HelpIcon />
            <span className="font-medium">Help</span>
          </button>
        </div>
      </div>

      {/* Upload Button */}
      <div className="p-6">
        <button className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition">
          <AddIcon />
          New Upload
        </button>
      </div>
    </aside>     
    </>
  )
}

export default SideBar