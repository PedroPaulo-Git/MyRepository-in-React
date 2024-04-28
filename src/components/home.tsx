import React from "react";
import styles from '../styles/Home.module.css';
import Seguir from '../imgs/seguir.png';
import Social from "./social";

function Home() {
    return(
        <div  id="home">
            <main className={styles.homeall}>
             
            <h1 className={styles.h1homeall} >Olá, eu sou um <br></br><span style={{fontSize:50,width:'20%'}} className={styles.DevH1}>Desenvolvedor <span className={styles.frontendH1} style={{fontSize:50,width:'20%'}}>Front-end</span></span></h1>
            <p  className={styles.phome}>Meu foco é front-end e este é meu portfólio. Aqui, você encontrará exemplos 
            de trabalhos que realizei, incluindo sites e aplicações. 
            Fico feliz em poder compartilhar um pouco do meu trabalho com você.</p>


            <Social/>
            <a style={{textDecoration:"none"}} href="https://api.whatsapp.com/send?phone=8199049803&text=Olá,%20gostaria%20de%20entrar%20em%20contato." target="_blank">
                <button type="submit" className={styles.homebutton}>Criar Jornada Comigo  <img src={Seguir} alt="" className={styles.seguir}/></button>
            </a>
            </main>
        </div>
    );
} 

export default Home;