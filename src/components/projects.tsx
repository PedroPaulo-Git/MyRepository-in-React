import React from 'react'
import styles from '../styles/projects.module.css';
import projeto1 from '../imgs/siteShopping.png';
import projeto2 from '../imgs/SiteMoviesRatingFIRST.png';
import projeto3 from '../imgs/Pokedex.png';
import projeto4 from '../imgs/MarioBros.png';
import projeto5 from '../imgs/tasks.png';
import projeto6 from '../imgs/claythonpy.png';
import projeto7 from '../imgs/SiteIdealRestaurante.jpg';
import Git from '../imgs/icongithub.png'
import {LuBrainCircuit} from 'react-icons/lu'
import { AiOutlineArrowRight,
        AiFillApi 
    } from "react-icons/ai";

import {BsInfoCircle}from 'react-icons/bs'

import {BiLogoJavascript
    ,BiLogoTypescript
    ,BiLogoReact,
    BiLogoHtml5,
    BiLogoCss3,
    BiLogoPython} from 'react-icons/bi'


function Projects() {
    return (
        <div>
            <main id='projets' className={styles.projetscALL}>

                <div className={styles.projectTop}>
                    <h3>Trabalhos concluídos</h3>
                    <h1 className={styles.projetsch1}>Projetos</h1>
                    <span className={styles.skillset_style}></span>
                </div>
                <div className={styles.projets}>
                <div className={styles.projet1}>


<div className={styles.containerProject1}>

    <a href="https://github.com/PedroPaulo-Git/"><img style={{ zIndex: 1 }} className={styles.imgprojet1content} src={projeto7} alt="restauramte_site" /></a>
    <div className={styles.projectinfo}>
        <h1 className={styles.h1infoproject}>Site de Restaurante </h1>
        <h1 className={styles.h1project}>Site de Restaurante</h1>
        <p className={styles.paragrafoproject}
        >Site de um restaurante utilizando React junto de Routers e typescript</p>
        <div className={styles.projectLinks}>
            <a className={styles.redirectproject} href="https://github.com/PedroPaulo-Git/"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
            <span className={styles.infoprojectICON}>
                <BsInfoCircle/>
                <p className={styles.infoprojectICONHIDDEN}>
                <BiLogoTypescript/>
                <BiLogoReact/>
                <BiLogoHtml5/>
                <BiLogoCss3/>
                </p>
                
            </span><a href="https://github.com/PedroPaulo-Git/"> <img alt="restauramte_site" style={{ width: '20px', height: "20px" }} src={Git} /></a>
        </div>
    </div>
</div>



</div>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>

                            <a href="https://github.com/PedroPaulo-Git/Shopping_app"><img style={{ zIndex: 1 }} className={styles.imgprojet1content} src={projeto1} alt="Shopping_app" /></a>
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de e-commerce  </h1>
                                <h1 className={styles.h1project}>E-commerce pessoal</h1>
                                <p className={styles.paragrafoproject}>Site e-commerce pessoal simples utilizando React junto de Routers e com typescript</p>
                                <div className={styles.projectLinks}>
                                    <a className={styles.redirectproject} href="https://github.com/PedroPaulo-Git/Shopping_app"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                    <span className={styles.infoprojectICON}>
                                        <BsInfoCircle/>
                                        <p className={styles.infoprojectICONHIDDEN}>
                                        <BiLogoTypescript/>
                                        <BiLogoReact/>
                                        <BiLogoHtml5/>
                                        <BiLogoCss3/>
                                        </p>
                                        
                                    </span><a href="https://github.com/PedroPaulo-Git/Shopping_app"> <img alt='' style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>

                            <a href="https://pedropaulo-git.github.io/MarioBrosGame/"><img style={{ zIndex: 1 }} className={styles.imgprojet1content} src={projeto4} alt="MarioBrosGame" /></a>
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de Game: Mario Bros</h1>
                                <h1 className={styles.h1project}>Mini Game Mario Bros</h1>
                                <p className={styles.paragrafoproject}>
                                    Mini Jogo do Mario Bros desenvolvido apenas com JS</p>
                                <div className={styles.projectLinks}>
                                    <a className={styles.redirectproject} href="https://pedropaulo-git.github.io/MarioBrosGame/"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                    <span className={styles.infoprojectICON}>
                                        <BsInfoCircle/>
                                        <p className={styles.infoprojectICONHIDDEN}>
                                        <BiLogoJavascript/>
                                        <BiLogoHtml5/>
                                        <BiLogoCss3/>
                                        </p>
                                        
                                    </span> <a href="https://github.com/PedroPaulo-Git/MarioBrosGame"> <img alt=''  style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>

                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>

                            <a href="https://pedropaulo-git.github.io/MoviesRating/"><img style={{ zIndex: 1 }}  className={styles.imgprojet1content} src={projeto2} alt="MoviesRating" /></a>
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de Movie API</h1>
                                <h1 className={styles.h1project}>Movies Ratting API</h1>
                                <p className={styles.paragrafoproject}>Projeto Web utilizando API de busca de filmes com React Hooks e Typescript</p>
                                <div className={styles.projectLinks}><a className={styles.redirectproject} href="https://pedropaulo-git.github.io/MoviesRating/"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                <span className={styles.infoprojectICON}>
                                        <BsInfoCircle/>
                                        <p className={styles.infoprojectICONHIDDEN}>
                                        <BiLogoJavascript/>
                                        <BiLogoReact/>
                                        <BiLogoCss3/>
                                        <BiLogoHtml5/>
                                        <AiFillApi/>
                                        </p>
                                        
                                    </span>  <a href="https://github.com/PedroPaulo-Git/MoviesRating"><img alt=''  style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>
                            <a href="https://pedropaulo-git.github.io/Pokedex/"><img  style={{ zIndex: 1 }}  className={styles.imgprojet1content} src={projeto3} alt="Pokedex" /></a>
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de Pokedex API</h1>
                                <h1 className={styles.h1project}>Pokedex API</h1>
                                <p className={styles.paragrafoproject}>
                                    Projeto de uma pokedex utilizando uma Api de Pokemon com ReactTS
                                </p>
                                <div className={styles.projectLinks}><a className={styles.redirectproject} href="https://pedropaulo-git.github.io/Pokedex/"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                    <span className={styles.infoprojectICON}>
                                        <BsInfoCircle/>
                                        <p className={styles.infoprojectICONHIDDEN}>
                                        <BiLogoTypescript/>
                                        <BiLogoReact/>
                                        <AiFillApi/>
                                        <BiLogoHtml5/>
                                        <BiLogoCss3/>
                                        </p>
                                        
                                    </span><a href="https://github.com/PedroPaulo-Git/Pokedex"><img alt=''  style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>
                            <a href="https://pedropaulo-git.github.io/TaskApp/"><img style={{ zIndex: 1 }}  className={styles.imgprojet1content} src={projeto5} alt="TaskApp" /></a>
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de TaskApp</h1>
                                <h1 className={styles.h1project}>TaskApp API</h1>
                                <p className={styles.paragrafoproject}>
                                    Projeto de um website task feito por mim, utilizando ReactJS e API fetch
                                </p>
                                <div className={styles.projectLinks}><a className={styles.redirectproject} href="https://pedropaulo-git.github.io/TaskApp/"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                    <span className={styles.infoprojectICON}>
                                        <BsInfoCircle/>
                                        <p className={styles.infoprojectICONHIDDEN}>
                                        <BiLogoJavascript/>
                                        <AiFillApi/>
                                        <BiLogoReact/>
                                        
                                        </p>
                                        
                                    </span><a href="https://github.com/PedroPaulo-Git/TaskApp"><img alt=''  style={{ width: '20px', height: "20px" }} src={Git} /></a>
                                </div>
                            </div>
                        </div>



                    </div>
                    <div className={styles.projet1}>


                        <div className={styles.containerProject1}>
                            <a href="https://github.com/PedroPaulo-Git/IA_Clayton"><img style={{ zIndex: 1 }}  className={styles.imgprojet1content} src={projeto6} alt="IAClayton" /><span className={styles.inprocess}>em processo</span></a>
                            <div className={styles.projectinfo}>
                                <h1 className={styles.h1infoproject}>Desenvolvimento de IA</h1>
                                <h1 className={styles.h1project}>IA para aprender inglês</h1>
                                <p className={styles.paragrafoproject}>
                                    Projeto utilizando meus conhecimentos em Python,IA Speech Recognition
                                </p>
                                <div className={styles.projectLinks}><a className={styles.redirectproject} href="https://github.com/PedroPaulo-Git/IA_Clayton"><p className={styles.paragraforedirectproject}>Ver Projeto </p> <AiOutlineArrowRight /></a>
                                    <span className={styles.infoprojectICON}>
                                        <BsInfoCircle/>
                                        <p className={styles.infoprojectICONHIDDEN}>
                                        <BiLogoPython/>
                                        <LuBrainCircuit/>
                                        
                                        </p>
                                        
                                    </span><a href="https://github.com/PedroPaulo-Git/IA_Clayton"><img alt=''  style={{ width: '20px', height: "20px" }} src={Git} /></a>
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