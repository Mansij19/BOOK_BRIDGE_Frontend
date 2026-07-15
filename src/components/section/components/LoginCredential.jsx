import React, { useState } from "react";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const LoginCredential = () => {
  const [hide, setHide] = useState(true);

  const data = [
    {
      name: "EMAIL",
      icon: <MailIcon size={20} className="text-gray-500" />,
      placeholder: "name@university.edu",
      type: "email",
    },
    {
      name: "PASSWORD",
      icon: <LockIcon size={20} className="text-gray-500" />,
      endIcon: hide ? (
        <VisibilityIcon size={20} className="text-gray-500" />
      ) : (
        <VisibilityOffIcon size={20} className="text-gray-500" />
      ),
      placeholder: "Password",
      type: hide ? "password" : "text",
    },
  ];

  const toggleVisibility = () => {
    setHide(!hide);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {data.map((item, index) => (
        <div key={index}>
          <div>
            <div className="flex justify-between items centre font-semibold">
              <label className="text-small  text-gray-500">{item.name}</label>
            </div>
          </div>

          <div className="flex items-center border rounded-lg border-gray-500 px-3 py-2 bg-white">
            {item.icon}
            <input
              type={item.type}
              placeholder={item.placeholder}
              className="w-full border-none outline-none"
            />
            <span
              className="cursor-pointer"
              onClick={toggleVisibility}
            >
              {item.endIcon}
            </span>
          </div>
        </div>
      ))}
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input type="checkbox" />
          Remember me for 30 days
        </div>
        <button className="text-sm text-blue-600 cursor-pointer hover:underline">
          Forgot password?
        </button>
      </div>
    </div>
  );
};

export default LoginCredential;
