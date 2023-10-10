import React from "react";
import { useState } from "react";
import '../styles/navgresponsive.module.css'
import style from '../styles/navgresponsive.module.css';
import Img from '../imgs/iconmenu.png';

function Navgres(){
 const [showmenu,setShowmenu] = useState(false)
 const funcShowmenu =()=>{
    setShowmenu(!showmenu);
 }
 

    return(
        <div className={style.menuall}>
            <main >
            
            <span className={style.spanmenu}>
            <img  onClick={funcShowmenu} className={style.menu} src={Img} 
            style={{width:30,height:30,right:0,backgroundColor:showmenu ? 'red': 'blue'}}>
            </img>
            <div style={{display:showmenu ? 'flex': 'none'}} className={style.menulist}>
            <ul>
                <li>Home</li>
                <li>Skills</li>
                <li>Projetos</li>
                <li>Contato</li>
            </ul>
            </div>
            </span>
            
            </main>

        </div>

    )
}
export default Navgres