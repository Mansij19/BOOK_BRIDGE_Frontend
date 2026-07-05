import { Routes, Route } from "react-router-dom";

import MainLayout from "../components/Layout/MainLayout";
import LandingPage from "../pages/LandingPage";
import BrowsePage from "../pages/BrowsePage";
// import AuthLayout from "../layouts/AuthLayout";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Main Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/browse" element={<BrowsePage />} />
      </Route>

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