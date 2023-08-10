import React, { useEffect, useRef, useState } from 'react';
import '../styles/navg.css';
import '../styles/header.css';
import Logo from '../imgs/ICONE.png';
import { NavLink } from 'react-router-dom';
import Navgres from './navgresponsive';
import Home from './home';
import Skillsets from './skillsets';
import Contact from './contact';

const Header = () => {
  const [linkAtivo, setLinkAtivo] = useState<string | null>(null);
  const navLinksRef = useRef<Array<HTMLAnchorElement | null>>([]);

  const intersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        const linkHref = entry.target.getAttribute('href');
        if (linkHref && linkHref !== linkAtivo) {
          setLinkAtivo(linkHref);
        }
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersection, { threshold: 0.5 });

    navLinksRef.current.forEach((Link) => {
      if (Link) observer.observe(Link);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="Header">
      <header className="header">
        <main className='mainheader'>
          <img src={Logo} alt="Logo" className='logo'/>
          <h1 className='logoname1'>Port</h1>
          <h1 className='logoname'>Pedro</h1>
          <div id='navegationheader'>
            <NavLink
              to="/"
              ref={(el) => (navLinksRef.current[0] = el)}
              className={linkAtivo === '/' ? 'link_nav active' : 'link_nav'}
            >
              <span className='headerNav'>Home</span>
            </NavLink>
            <NavLink
              to="/servicos"
              ref={(el) => (navLinksRef.current[1] = el)}
              className={linkAtivo === '/servicos' ? 'link_nav active' : 'link_nav'}
            >
              <span className='headerNav'>Serviços</span>
            </NavLink>
            <NavLink
              to="/contato"
              ref={(el) => (navLinksRef.current[2] = el)}
              className={linkAtivo === '/contato' ? 'link_nav ' : 'link_nav'}
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
