import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../styles/navg.css';
import '../styles/header.css';
import Logo from '../imgs/ICONE.png';
import { FaAngleUp } from "react-icons/fa6";

const Header = () => {


  const [isHomeLinkHovered, setIsHomeLinkHovered] = useState(true);
  const [isSkillsLinkHovered, setIsSkillsLinkHovered] = useState(false);
  const [isContactLinkHovered, setIsContactLinkHovered] = useState(false);
  const [isProjectLinkHovered, setIsProjectLinkHovered] = useState(false);

  const [backToTop, setBackToTop] = useState(false)
  const navLinksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const scrollHeight = document.body.scrollHeight;

      if (scrollHeight - scrollY - windowHeight < 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <div className="Header">
      <header className="header">
        <main className='mainheader'>
          <img src={Logo} alt="Logo" className='logo' />
          <h1 className='logoname1'>Port</h1>
          <h1 className='logoname'>Pedro</h1>

          <div id='navegationheader'>

            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-220}
              duration={500}
              className={`${isHomeLinkHovered ? 'link_nav ' : ''}`}
              onMouseEnter={() => {

                setIsHomeLinkHovered(true);
                setIsProjectLinkHovered(false);
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
              offset={-100}
              duration={1000}
              to="projets"
              className={`link_nav ${isProjectLinkHovered ? 'link_nav active' : ''}`}
              onMouseEnter={() => {
                setIsProjectLinkHovered(true);
                setIsContactLinkHovered(false);
                setIsSkillsLinkHovered(false);
                setIsHomeLinkHovered(false);

              }
              }
              onMouseLeave={() => setIsProjectLinkHovered(true)}
            >
              <span className='headerNav'>Projetos</span>
            </Link>      <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
              to="skills"
              className={`link_nav ${isSkillsLinkHovered ? 'link_nav active' : ''}`}
              onMouseEnter={() => {
                setIsHomeLinkHovered(false);
                setIsProjectLinkHovered(false);
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
                setIsProjectLinkHovered(false);
                setIsSkillsLinkHovered(false);
                setIsHomeLinkHovered(false);

              }
              }
              onMouseLeave={() => setIsContactLinkHovered(true)}
            >
              <span className='headerNav'>Contato</span>
            </Link>



          </div>

          {backToTop && (
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-220}
              duration={500}
              className="link_nav_back"
            >
              <span className="headerNav_back">
                <FaAngleUp />
              </span>
            </Link>
          )}
        </main>
      </header>
    </div>
  );
};

export default Header;
