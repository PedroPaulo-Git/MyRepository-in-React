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

                    <a  className={styles.projets_content} href="https://github.com/PedroPaulo-Git/Pokedex">Pokedex</a>
                    
                    <a  className={styles.projets_content} href="https://github.com/PedroPaulo-Git/Shopping_app">Shopping App</a>
                    <a  className={styles.projets_content} href="https://github.com/PedroPaulo-Git/Shopping_app">CRUD -Java</a>
                    <a  className={styles.projets_content} href="https://github.com/PedroPaulo-Git/Instagram_Clone">Instagram Clone</a>
                    <a  className={styles.projets_content} href="https://github.com/PedroPaulo-Git/MarioBrosGame">Mario Bros Game</a>
                    <a  className={styles.projets_content} href="https://github.com/PedroPaulo-Git/Spotify">Spotify</a>
                    <a  className={styles.projets_content} href="https://github.com/PedroPaulo-Git/Gerador-de-senhas">Gerador de senhas</a>
                    <a  className={styles.projets_content_process} href="">em processo..</a>
                    <a  className={styles.projets_content_process} href="">em processo..</a>
                    <a  className={styles.projets_content_process} href="">em processo..</a>
                    <a  className={styles.projets_content_process} href="">To-do List</a>
                 </div>
            </main>
        </div>
    )

}
export default Projects