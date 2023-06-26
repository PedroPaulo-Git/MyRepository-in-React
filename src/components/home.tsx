import React from "react";
import styles from '../styles/Home.module.css';
import Seguir from '../imgs/seguir.png';

function Home() {
    return(
        <div>
            <main className={styles.homeall}>
             
            <h1>Olá, eu sou um Desenvolvedor Front-end</h1>
            <p  className={styles.phome}>Meu foco é front-end e este é meu portfólio. Aqui, você encontrará exemplos de trabalhos que realizei, incluindo sites e aplicações. Fico feliz em poder compartilhar um pouco do meu trabalho com você.</p>
            <button type="submit" className={styles.homebutton}>Criar Jornada Comigo  <img src={Seguir} alt="" className={styles.seguir}/></button>
            </main>
        </div>
    );
} 

export default Home;