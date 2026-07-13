import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
const LoginCredential = () => {
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
      placeholder: "Password",
      type: "password",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {data.map((item, index) => (
        <div key={index}>
          <div>
            <div className="flex justify-between items centre font-semibold">
              <label className="text-small  text-gray-500">
                {item.name}
              </label>
              {item.type === "password" && (
              <button className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </button>
            )}
            </div>
          </div>

          <div  className="flex items-center border rounded-lg border-gray-500 px-3 py-2 bg-white">
            {item.icon}
          <input
            type={item.type}
            placeholder={item.placeholder}
            className="w-full"
          />
          </div>
        </div>
      ))}
      <div className="flex gap-2">
        <input type="checkbox" />
        Remember me for 30 days
      </div>
    </div>
  );
};

export default LoginCredential;
