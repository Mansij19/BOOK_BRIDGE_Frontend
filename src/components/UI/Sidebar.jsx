import React from 'react'
import ForumIcon from '@mui/icons-material/Forum';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import CampaignIcon from '@mui/icons-material/Campaign';
import SettingsIcon from '@mui/icons-material/Settings';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
const Sidebar = () => {
  const data =[{
    icon : <ForumIcon/>,
    value : "All Feed"
  },
  {
    icon : <HelpCenterIcon/>,
    value : "Questions"
  },
  {
    icon : <LibraryBooksIcon/>,
    value : "Answers"
  },
  {
    icon : <GroupsIcon/>,
    value : "Study Groups"
  },{
    icon : <CampaignIcon/>,
    value : "Announcements"
  },
  
];
const dataNext =[{
    icon : <SettingsIcon/>,
    value : "Settings"
  },
  {
    icon : <QuestionMarkIcon/>,
    value : "Help"
  }]
  return (
    <div className='w-full'>
      <div className='border border-black'>
        {data.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
              ${
                item.active
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
          >
            {item.icon}
            <span>{item.value}</span>
          </button>
        ))}
      </div>
       <div className="border border-black space-y-2">
        {dataNext.map((item, index) => (
          <button
            key={index}
            className="w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-all duration-200"
          >
            {item.icon}
            <span>{item.value}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default Sidebar