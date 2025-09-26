import { useState } from "react";

import Sidebar from "../pages/Sidebar";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import virtulab from '../assets/Virtulab.svg';  


function Header() {
  const [show, setShow] = useState(false);

  return (
    <div>

      <header className="bg-[#4FA9E2] text-white p-5 flex">
        <button  onClick={() => setShow(!show)}>
          <MenuIcon />
        </button>

        <div className="flex items-center">
          <img src={virtulab} alt="Virtulab" className="w-10 inline-block" />
          <h1 className="text-2xl font-bold">VirtuLab</h1>
        </div>

        <div className="ml-auto flex flex-col items-center">
          <div>
            <AccountCircleIcon sx={{fontSize: 25}}/>
          </div>
          <h1 className="font-bold">User</h1>
        </div>
      </header>
  
      <div> 
         {show ? <Sidebar /> : null}
      </div>
           
    </div > 
  );
}

export default Header;
