import React from 'react'
import styles from '../styles/projects.module.css'

function Projects(){
    return(
        <div>
            <main className={styles.projetscALL}>
                <h3>Trabalhos concluídos</h3>
                <h1 className={styles.projetsch1}>Projetos</h1>
                <span className={styles.skillset_style}></span>
                <div  className={styles.projets}>

                    <a  className={styles.projets_content} href="">Pokedex</a>
                    <a  className={styles.projets_content} href="">To-do List</a>
                    <a  className={styles.projets_content} href="">Shopping App</a>
                    <a  className={styles.projets_content_process} href="">em processo</a>
                    <a  className={styles.projets_content_process} href="">em processo</a>
                    <a  className={styles.projets_content_process} href="">em processo</a>
                    <a  className={styles.projets_content_process} href="">em processo</a>
                    <a  className={styles.projets_content_process} href="">em processo</a>
                
                 
                 
                 
                 </div>
            </main>
        </div>
    )

}
export default Projects