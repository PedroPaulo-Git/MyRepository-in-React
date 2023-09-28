import React from 'react'
import styles from '../styles/projects.module.css';
import projeto1 from '../imgs/siteShopping.png';
import projeto2 from '../imgs/SiteMoviesRatingFIRST.png';
import projeto3 from '../imgs/Pokedex.png';
import projeto4 from '../imgs/MarioBros.png';
import Git from '../imgs/icongithub.png'
import { AiOutlineArrowRight } from "react-icons/ai";
function Projects() {
    return (
        <div>
            <main className={styles.projetscALL}>
                
                <div className={styles.projectTop}>
                <h3>Trabalhos concluídos</h3>
                <h1 className={styles.projetsch1}>Projetos</h1>
                <span className={styles.skillset_style}></span>
                </div>
                <div className={styles.projets}>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>

                            <a href="https://github.com/PedroPaulo-Git/Shopping_app"><img style={{ zIndex: 1 }} className={styles.imgprojet1content} src={projeto1} alt="" /></a>
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de e-commerce</h1>
                                <h1 className={styles.h1project}>E-commerce pessoal</h1>
                                <p className={styles.paragrafoproject}>Site e-commerce pessoal simples utilizando React junto de Routers e com typescript</p>
                                <div className={styles.projectLinks}>
                                    <a className={styles.redirectproject} href="https://github.com/PedroPaulo-Git/Shopping_app"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                   <a href="https://github.com/PedroPaulo-Git/Shopping_app"> <img style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>

                            <a href="https://pedropaulo-git.github.io/MarioBrosGame/"><img style={{ zIndex: 1 }} className={styles.imgprojet1content} src={projeto4} alt="" /></a>
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de Game: Mario Bros</h1>
                                <h1 className={styles.h1project}>Mini Game Mario Bros</h1>
                                <p className={styles.paragrafoproject}>
                                    Mini Jogo do Mario Bros desenvolvido apenas com JavaScript</p>
                                <div className={styles.projectLinks}>
                                    <a className={styles.redirectproject} href="https://pedropaulo-git.github.io/MarioBrosGame/"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                   <a href="https://github.com/PedroPaulo-Git/MarioBrosGame"> <img style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>

                           <a href="https://pedropaulo-git.github.io/MoviesRating/"><img className={styles.imgprojet1content} src={projeto2} alt="" /></a> 
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de Movie API</h1>
                                <h1 className={styles.h1project}>Movies Ratting API</h1>
                                <p className={styles.paragrafoproject}>Projeto Web utilizando API de busca de filmes com React Hooks e Typescript</p>
                                <div className={styles.projectLinks}><a className={styles.redirectproject} href="https://pedropaulo-git.github.io/MoviesRating/"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                    <a href="https://github.com/PedroPaulo-Git/MoviesRating"><img style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>
                           <a href="https://pedropaulo-git.github.io/Pokedex/"><img className={styles.imgprojet1content} src={projeto3} alt="Pokedex" /></a> 
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de Pokedex API</h1>
                                <h1 className={styles.h1project}>Pokedex API</h1>
                                <p className={styles.paragrafoproject}>
                                    Projeto de uma pokedex utilizando uma Api de Pokemon com ReactTS 
                                    </p>
                                <div className={styles.projectLinks}><a className={styles.redirectproject} href="https://pedropaulo-git.github.io/Pokedex/"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                    <a href="https://github.com/PedroPaulo-Git/Pokedex"><img style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>




                </div>
            </main>
        </div>
    )

}
export default Projects