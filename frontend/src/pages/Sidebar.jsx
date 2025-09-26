import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import SettingsIcon from '@mui/icons-material/Settings';
import InventoryIcon from '@mui/icons-material/Inventory';

function Sidebar() {

  return (
    <aside className="w-65 h-dvh  bg-[#F2F2F2] p-4">
      <ul className="space-y-5">
        <li><a href="/Home"><HomeIcon sx={{ marginRight: 1, fontSize: 25}}/>Home</a></li>
        <li><a href="/To_Do"><ListIcon sx={{  marginRight: 1, fontSize: 20 }}/>To Do</a></li>
        <li><a href="/Settings"><SettingsIcon sx={{  marginRight: 1, fontSize: 20 }}/>Settings</a></li>
        <li><a href="/Archived_Classes"><InventoryIcon sx={{  marginRight: 1, fontSize: 20 }}/>Archived Classes</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
