import React, { useRef, useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/navg.css';
import '../styles/header.css';
import Logo from '../imgs/ICONE.png';

const Header = () => {


  const [isHomeLinkHovered, setIsHomeLinkHovered] = useState(false);
  const [isSkillsLinkHovered, setIsSkillsLinkHovered] = useState(false);
  const [isContactLinkHovered, setIsContactLinkHovered] = useState(false);
  const navLinksRef = useRef([]);


  return (
    <div className="Header">
      <header className="header">
        <main className='mainheader'>
          <img src={Logo} alt="Logo" className='logo' />
          <h1 className='logoname1'>Port</h1>
          <h1 className='logoname'>Pedro</h1>
          <div id='navegationheader'>

            <Link
              to="/"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={`link_nav  ${isHomeLinkHovered ? 'link_nav active' : ''}`}
              onMouseEnter={() => {

                setIsHomeLinkHovered(true);
                setIsSkillsLinkHovered(false);
                setIsContactLinkHovered(false);
              }

              }
              onMouseLeave={() => setIsHomeLinkHovered(true)}
            >
              <span className='headerNav '>Home</span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              to="skills"
              className={`link_nav ${isSkillsLinkHovered ? 'link_nav active' : ''}`}
              onMouseEnter={() => {
                setIsHomeLinkHovered(false);
                setIsSkillsLinkHovered(true);
                setIsContactLinkHovered(false)
              }}
              onMouseLeave={() => setIsSkillsLinkHovered(true)}
            >
              <span className='headerNav'>Skills</span>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              to="contact"
              className={`link_nav ${isContactLinkHovered ? 'link_nav active' : ''}`}
              onMouseEnter={() => {
                setIsContactLinkHovered(true);  
                setIsSkillsLinkHovered(false);
                setIsHomeLinkHovered(false);
             
              }
              }
              onMouseLeave={() => setIsContactLinkHovered(true)}
            >
              <span className='headerNav'>Contato</span>
            </Link>
          </div>
        </main>
      </header>
    </div>
  );
};

export default Header;
