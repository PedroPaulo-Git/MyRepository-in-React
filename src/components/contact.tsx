import React from "react";
import style from '../styles/contact.module.css'

function Contact(){
    return(
        <div>
            <main className={style.containerContact}>
                
            <h1 className={style.h1contact}>Conecte-se comigo</h1>
            <input className={style.inputcontact} type="email" name="" id="" placeholder="Email" />
            <input className={style.inputcontact} type="text" name="" id="" placeholder="Mensagem" />
            <input className={style.buttoncontact}type="submit" value="Conecte-se" />
        </main>
        </div>
    )
}
export default Contact;