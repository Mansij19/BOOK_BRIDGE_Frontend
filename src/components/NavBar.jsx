import NotificationsIcon from '@mui/icons-material/Notifications';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
function Navbar() {

  return (
    <>
    <nav className = "w-full h-30 bg-white border-b border-gray-200 flex items-center justify-between px-10">
      <div className="text-5xl font-bold text-blue-500 cursor-pointer">
        BookBridge
      </div>
      <ul className="flex items-center gap-12 text-2xl font-medium text-gray-600">
        <li className="text-blue-600 border-b-4 border-blue-600 pb-2 cursor-pointer">Browse </li>
        <li className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">Community</li>
        <li 
        onClick
        className="hover:text-blue-600 transition-colors duration-300 cursor-pointer">About</li>
      </ul>
      <button 
      className=" w-60 h-15 gap-x-1.5 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 text-medium">
       <AddCircleIcon className="text-white gap-1" />
        Upload Resources
      </button>
      <span className="flex items-center gap-4">
       <NotificationsIcon className="text-gray-600 hover:text-blue-500 cursor-pointer text-[40px]!" />
       <ShoppingCartCheckoutIcon className= "text-gray-600 hover:text-blue-500 cursor-pointer text-[40px]!" />
       <AccountCircleIcon className="text-gray-600 hover:text-blue-500 cursor-pointer text-[40px]!" />
      </span>

    </nav>
    </>
  );
}

export default Navbar;