import React from "react";
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
const LoginCredential = () => {
  const data = [
    {
      icon: <MailIcon size={20} className="text-gray-500" />,
      placeholder: "name@university.edu",
      type: "email",
    },
    {
      icon: <LockIcon size={20} className="text-gray-500" />,
      placeholder: "Password",
      type: "password",
    },
  ];

  return (
    
    <div className="flex flex-col gap-4 w-full">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center border rounded-lg border-gray-500 px-3 py-2 bg-white"
        >
          {item.icon}
          <input
            type={item.type}
            placeholder={item.placeholder}
            className="w-full"
          />
        </div>
      ))}
      <div className="gap-4">
        <input type="checkbox" />
        Remember me for 30 days
      </div>
      
    </div>
    
  );
};

export default LoginCredential;