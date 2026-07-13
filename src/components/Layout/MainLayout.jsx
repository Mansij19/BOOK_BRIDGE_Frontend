import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from '../UI/NavBar/NavBar';
import Footer from '../UI/Footer';

const MainLayout = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <Outlet />

      {/* Footer */}
      
        <Footer />
    
    </>
  );
};


export default MainLayout