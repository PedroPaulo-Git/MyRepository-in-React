import React from 'react';
import '../styles/navg.css';
import '../styles/header.css';
import Logo from '../imgs/ICONE.png';
import { NavLink } from "react-router-dom";




const Header: React.FC = () => {
  return (
    
    <div className="Header">
      
      <header className="header">
        <main className='mainheader'>
          <img src={Logo} alt="Logo" className='logo'/>
        
          <h1 className='logoname1'>Port</h1>
          <h1 className='logoname'>Pedro</h1>
   
    <div id='navegationheader'>
        <NavLink className={({ isActive }) =>
            [
              "link_nav",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }
          to="/"
        >
           <span className='headerNav'>Home</span> 
</NavLink>
<NavLink className={({ isActive }) =>
            [
              "link_nav",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }
          to="/serviços"
        >
             <span className='headerNav'>Serviços</span> 
</NavLink>
<NavLink className={({ isActive }) =>
            [
              "link_nav",
              isActive ? "active" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }
          to="/Contato"
        >
           <span className='headerNav'>Contato</span>   
</NavLink>
        </div>

        </main>
        
      </header>
    </div>
  );
};

export default Header;
