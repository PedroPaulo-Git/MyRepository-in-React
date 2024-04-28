import React from "react";
import style from '../styles/social.module.css';
import Img3 from '../imgs/icongithub.png';
import Imglinkedin from '../imgs/iconlinkedin.png';
import ImgInsta from '../imgs/iconinstagram.png';
import ImgWpp from '../imgs/iconwhatsapp.png';

function Social (){
    return(
        <div>
            <main className={style.social}>
            <a href="https://github.com/PedroPaulo-Git" target="_blank"><img src={Img3} alt="Git Pedro" className={style.imgsocial} /></a>
            <a href="https://www.linkedin.com/in/pedro-paulodev/" target="_blank"><img src={Imglinkedin} alt="Git Pedro" className={style.imgsocial} /></a>
            <a href="https://www.instagram.com/devpedrooficial/" target="_blank"><img src={ImgInsta} alt="Git Pedro" className={style.imgsocial} /></a>
            <a href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato." target="_blank"><img src={ImgWpp} id={style.wpp} alt='Git Pedro' className={style.imgsocial}/></a>
             </main>
        </div>
    )
}
export default Social