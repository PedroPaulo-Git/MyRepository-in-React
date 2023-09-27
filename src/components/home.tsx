import React from "react";
import styles from '../styles/Home.module.css';
import Seguir from '../imgs/seguir.png';
import Social from "./social";

function Home() {
    return(
        <div>
            <main className={styles.homeall}>
             
            <h1 className={styles.h1homeall} >Olá, eu sou um Desenvolvedor Front-end</h1>
            <p  className={styles.phome}>Meu foco é front-end e este é meu portfólio. Aqui, você encontrará exemplos 
            de trabalhos que realizei, incluindo sites e aplicações. 
            Fico feliz em poder compartilhar um pouco do meu trabalho com você.</p>


            <Social/>
            <a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=8181523701&text=Olá,%20gostaria%20de%20entrar%20em%20contato." target="_blank">
                <button type="submit" className={styles.homebutton}>Criar Jornada Comigo  <img src={Seguir} alt="" className={styles.seguir}/></button>
            </a>
            </main>
        </div>
    );
} 

export default Home;