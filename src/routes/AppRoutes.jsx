import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";
import LandingPage from "../pages/LandingPage";
import BrowsePage from "../pages/BrowsePage";
import CommunityPage from "../pages/CommunityPage";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";
import UploadPage from "../pages/UploadPage";
import NotificationsPage from "../pages/NotificationPage";
import CartPage from "../pages/CartPage";
// import AuthLayout from "../layouts/AuthLayout";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Main Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse" element={<BrowsePage />} />
        <Route path="/Community" element={<CommunityPage />} />
        <Route path="/About" element={<AboutPage />} />
        
      </Route>
      <Route path="/profile" element= {<ProfilePage />} />
      <Route path="/uploads" element= {<UploadPage />} />
      <Route path="/notifications" element= {<NotificationsPage />} />
      <Route path="/cart" element= {<CartPage />} />

      {/* Authentication */}
      {/* <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route> */}

      {/* 404 */}
      {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
  );
};

export default AppRoutes;