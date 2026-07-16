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
    icon : <ForumIcon/>
    value : "All Feed"
  },
  {
    icon : <HelpCenterIcon/>
    value : "Questions"
  },
  {
    icon : <LibraryBooksIcon/>
    value : "Answers"
  },
  {
    icon : <GroupsIcon/>
    value : "Study Groups"
  },{
    icon : <CampaignIcon/>
    value : "Announcements"
  },
  {
    icon : <SettingsIcon/>
    value : "Settings"
  },
  {
    icon : <QuestionMarkIcon/>
    value : "Help"
  }
]
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar