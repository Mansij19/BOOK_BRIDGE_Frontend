import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NavLinks from "./component/NavLinks";
import { Button, IconButton, Typography } from "@mui/material";
function Navbar() {
  return (
    <>
      <nav className="w-full h-20 bg-white border-b border-gray-200 flex items-center justify-between px-10">
        <div className="flex gap-8">
          <div className="text-3xl font-bold text-blue-500 cursor-pointer">
            BookBridge
          </div>
          <NavLinks />
        </div>

        <div className="flex items-center gap-8">
          <Button
            variant="contained"
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl"
            startIcon={<AddCircleIcon />}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: "600",
              }}
            >
              Upload Resources
            </Typography>
          </Button>

          <div>
            <IconButton size="medium">
              <NotificationsIcon className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            </IconButton>
            <IconButton size="medium">
              <ShoppingCartCheckoutIcon className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            </IconButton>
            <IconButton size="medium">
              <AccountCircleIcon className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            </IconButton>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
