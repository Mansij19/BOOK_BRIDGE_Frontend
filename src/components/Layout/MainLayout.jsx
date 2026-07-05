import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../UI/NavBar/NavBar';

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Outlet />

      {/* Footer */}
    </>
  );
};


export default MainLayout