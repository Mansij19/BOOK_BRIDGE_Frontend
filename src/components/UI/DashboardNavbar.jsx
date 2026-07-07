import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, IconButton, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavLinks from "./NavBar/component/NavLinks";
function DashboardNavbar() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <nav className="w-full h-20 bg-white border-b border-gray-200 flex items-center justify-end px-10">
        <div className="flex gap-5 justify-center items-center">
          <div>
            <NotificationsIcon className="text-gray-600 hover:text-blue-500 cursor-pointer" />
          </div>
          <div>
            <AccountCircleIcon className="text-gray-600 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default DashboardNavbar;
