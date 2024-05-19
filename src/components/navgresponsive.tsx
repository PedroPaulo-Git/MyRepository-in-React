import React from "react";
import { useState } from "react";
import { Link } from 'react-scroll';
import '../styles/navgresponsive.module.css'
import style from '../styles/navgresponsive.module.css';
import Img from '../imgs/iconmenu.png';

function Navgres() {
  const [isHomeLinkHovered, setIsHomeLinkHovered] = useState(true);
  const [isSkillsLinkHovered, setIsSkillsLinkHovered] = useState(false);
  const [isContactLinkHovered, setIsContactLinkHovered] = useState(false);
  const [isProjectLinkHovered, setIsProjectLinkHovered] = useState(false);

  const [showmenu, setShowmenu] = useState(false)
  const funcShowmenu = () => {
    setShowmenu(!showmenu);
  }


  return (
    <div className={style.menuall}>
      <main >

        <span className={style.spanmenu}>
          <img onClick={funcShowmenu} className={style.menu} src={Img}
            style={{ width: 30, height: 30, right: 0, backgroundColor: showmenu ? '' : '' }}>
          </img>
          <div style={{ display: showmenu ? 'flex' : 'none' }} className={style.menulist}>
            <ul>

              <li><Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="skills">Skills</Link></li>
              <li><Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="projets">Projetos</Link></li>
              <li><Link
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                to="contact">Contato</Link></li>
            </ul>
          </div>
        </span>

      </main>

    </div>

  )
}
export default Navgres