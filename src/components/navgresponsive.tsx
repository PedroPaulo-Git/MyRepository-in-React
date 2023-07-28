import React from "react";
import '../styles/navgresponsive.module.css'
import style from '../styles/navgresponsive.module.css';
import Img from '../imgs/iconmenu.png';

function Navgres(){
    return(
        <div className={style.menuall}>
            <main >
            
            <span className={style.spanmenu}>
            <img className={style.menu} src={Img} style={{
            width:30,height:30,right:0}}></img>
            </span>
            
            </main>

        </div>

    )
}
export default Navgres