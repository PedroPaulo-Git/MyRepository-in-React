import React from "react";
import {Link} from 'react-router-dom'
import style from '../styles/contact.module.css'
import Iconwpp from '../imgs/iconwhatsapp.png'

function Contact(){
    return(
        <div>
            <main className={style.containerContact} >
                
            <h1 className={style.h1contact}>Conecte-se comigo</h1>
            <input className={style.inputcontact} type="email" name="" id="" placeholder="Email" />
            <input className={style.inputcontact} type="text" name="" id="" placeholder="Mensagem" />
            <input className={style.buttoncontact}type="submit" value="Conecte-se" />
            
           
        </main> <span className={style.spann}>
        (81) 98152-3701<img src={Iconwpp} style={{width:20,marginLeft:10}}/></span>
        </div>
    )
}
export default Contact;