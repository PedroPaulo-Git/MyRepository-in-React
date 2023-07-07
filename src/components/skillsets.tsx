import React from 'react';
import {Link} from 'react-router-dom'
import styles from '../styles/skillsets.module.css';
import Img1 from '../imgs/iconcss.png';
import Img2 from '../imgs/iconfrontend.png';
import Img3 from '../imgs/icongithub.png';
import Img4 from '../imgs/iconweb.png';
import Imgreact from '../imgs/iconnative.png';
import Imgweb from '../imgs/iconweb.png';
import Imgjs from '../imgs/iconjs.png';
import Imgts from '../imgs/iconts.png';






function Skillsets(){
    return (
        
        
        
    <div>
        <main className={styles.skillall}>
        <h3>Competências</h3>
        <h1 className={styles.h1skill}>Skill-Sets</h1>
        <span className={styles.skillset_style}></span>

<div className={styles.maincontainerskill} >

        <div className={styles.containerskill}>
                    <img src={Img1} alt=""className={styles.imgskill}></img>
                    <h5>Desenvolvimento com CSS</h5>
                    <p className={styles.pskill}>
                    Desenvolvo aplicações e serviços em CSS, criando designs com estilos únicos e com minha própria essência.
                    </p>
               
        </div> 

        <div className={styles.containerskill}>
                    <img src={Imgts} alt=""className={styles.imgskill}></img>
                    <h5>Aplicações em TypeScript</h5>
                    <p className={styles.pskill}>
                        Desenvolvo aplicações em TypeScript,tendo uma base de conhecimentos básicas por enquanto,porém em progressão. 
                    </p>
               
        </div> 

        <div className={styles.containerskill}>
                    <img src={Imgjs} alt=""className={styles.imgskill}></img>
                    <h5>Desenvolvimento em JavaScript</h5>
                    <p className={styles.pskill}>
                        Tenho ótimos conhecimentos em Programação utilizando JS,Compreendendo os conceitos fundamentais da linguagem
                        e sou capaz de transformar as necessidades em código claro e eficiente.
                    </p>
               
        </div> 

        <div className={styles.containerskill}>
                    <img src={Imgreact} alt=""className={styles.imgskill}></img>
                    <h5>Desenvolvimento Utilizando React </h5>
                    <p className={styles.pskill}>
                        Tenho experiência em desenvolver em React,focando principalmente na interface grafica,No entanto,aproveitando 
                        os componentes de back-end sempre que possível
                    </p>
               
        </div>

        <div className={styles.containerskill}>
                    <img src={Img2} alt=""className={styles.imgskill}></img>
                    <h5>Experiência em Front-end</h5>
                    <p className={styles.pskill}>
                    Como meu foco principal o Front-end, tenho maior habilidade de desenvolvimento,noção boa em CSS e HTML,utilizando 
                    React como biblioteca de maior entendimento.
                    </p>
               
        </div>

        <div  className={styles.containerskill}>
                    <img src={Imgweb} alt="" className={styles.imgskill}></img>
                    <h5>Desenvolvimento Web Responsivo</h5>
                    <p className={styles.pskill}>
                    Sempre tentando usar as melhores tecnologias e sempre me profissionalizando em algo novo,consigo usar
                    ferramentas para sempre fazer sites Responsivos.
                    </p>
            


        </div>

</div>


        </main>
    </div>
    )
}
export default Skillsets;