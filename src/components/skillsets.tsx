import React from 'react';
import styles from '../styles/skillsets.module.css'
import Img1 from '../imgs/iconcss.png'

function Skillsets(){
    return (
    <div>
        <main className={styles.skillall}>
        <h3>Competências</h3>
        <h1 className={styles.h1skill}>Skill-Sets</h1>

<div className={styles.maincontainerskill}>
        <div className={styles.containerskill}>
                    <img src={Img1} alt=""className={styles.imgskill}></img>
                    <h5>Desenvolvimento Web com CSS</h5>
                    <p className={styles.pskill}>Serviço de desenvolvimento web que utiliza CSS para criação de estilos e layout das páginas. </p>
               
        </div> 

        <div className={styles.containerskill}>
                    <img src={Img1} alt=""className={styles.imgskill}></img>
                    <h5>Desenvolvimento Web com CSS</h5>
                    <p className={styles.pskill}>Serviço de desenvolvimento web que utiliza CSS para criação de estilos e layout das páginas. </p>
               
        </div>

        <div className={styles.containerskill}>
                    <img src={Img1} alt=""className={styles.imgskill}></img>
                    <h5>Desenvolvimento Web com CSS</h5>
                    <p className={styles.pskill}>Serviço de desenvolvimento web que utiliza CSS para criação de estilos e layout das páginas. </p>
               
        </div>

        <div  className={styles.containerskill}>
                    <img src={Img1} alt="" className={styles.imgskill}></img>
                    <h5>Desenvolvimento Web Responsivo</h5>
                    <p className={styles.pskill}>Serviço de desenvolvimento web que cria sites que se adaptam a diferentes tamanhos de tela, proporcionando melhor experiência para o usuário.</p>
            


        </div>

</div>


        </main>
    </div>
    )
}
export default Skillsets;