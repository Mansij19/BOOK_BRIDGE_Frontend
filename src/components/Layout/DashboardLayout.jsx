import React from "react";
import DashboardSideBar from "../UI/DashboardSideBar";
import DashboardNavbar from "../UI/DashboardNavbar";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="w-full h-screen flex">
      <DashboardSideBar />
      <div className="flex flex-col w-[calc(100%-288px)]">
        <DashboardNavbar />
        <div className="w-full h-full p-4"><Outlet /></div>
      </div>
    </div>
  );
};

export default DashboardLayout;
