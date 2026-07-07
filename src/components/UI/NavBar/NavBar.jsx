import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, IconButton, Typography } from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavLinks from "./component/NavLinks";
function Navbar() {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <>
      <nav className="w-full h-20 bg-white border-b border-gray-200 flex items-center justify-between px-10">
        <div className="flex gap-8">
          <div className="text-3xl font-bold text-blue-500 cursor-pointer">
            <Link to="/"> BookBridge </Link>
          </div>

          <NavLinks currentPath={pathName} />
        </div>

        <div className="flex items-center gap-8">
          <Link to="/uploads">
            <Button
              variant="contained"
              startIcon={<AddCircleIcon />}
              className="bg-blue-500 text-white"
            >
              Upload Resources
            </Button>
          </Link>

          <div>
            <Link to="/notifications">
            <IconButton size="medium">
              <NotificationsIcon className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            </IconButton>
            </Link>
            <Link to="/cart">
            <IconButton size="medium">
              <ShoppingCartCheckoutIcon className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            </IconButton>
            </Link>
            <Link to="/profile">
              <IconButton size="medium">
                <AccountCircleIcon className="text-gray-600 hover:text-blue-500" />
              </IconButton>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
