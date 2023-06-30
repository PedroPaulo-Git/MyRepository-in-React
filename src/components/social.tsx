import React from "react";
import style from '../styles/social.module.css';
import Img3 from '../imgs/icongithub.png';
import Imglinkedin from '../imgs/iconlinkedin.png';
import ImgInsta from '../imgs/iconinstagram.png'

function Social (){
    return(
        <div>
            <main className={style.social}>
            <a href="https://github.com/PedroPaulo-Git"><img src={Img3} alt="Git Pedro" className={style.imgsocial} /></a>
            <a href="https://www.linkedin.com/in/pedro-paulodev/"><img src={Imglinkedin} alt="Git Pedro" className={style.imgsocial} /></a>
            <a href="https://www.instagram.com/devpedrooficial/"><img src={ImgInsta} alt="Git Pedro" className={style.imgsocial} /></a>
             </main>
        </div>
    )
}
export default Social