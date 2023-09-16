import React from 'react'
import styles from '../styles/projects.module.css';
import projeto1 from '../imgs/siteShopping.png';
import { AiOutlineArrowRight } from "react-icons/ai";
function Projects() {
    return (
        <div>
            <main className={styles.projetscALL}>
                <h3>Trabalhos concluídos</h3>
                <h1 className={styles.projetsch1}>Projetos</h1>
                <span className={styles.skillset_style}></span>
                <div className={styles.projets}>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>

                            <img className={styles.imgprojet1content} src={projeto1} alt="" />
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de e-commerce</h1>
                                <h1 className={styles.h1project}>E-commerce pessoal</h1>
                                <p className={styles.paragrafoproject}>Site e-commerce pessoal simples utilizando React junto de Routers e com typescript</p>
                                <a className={styles.redirectproject} href=""><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight/></a>
                            </div>
                        </div>



                    </div>


                </div>
            </main>
        </div>
    )

}
export default Projects