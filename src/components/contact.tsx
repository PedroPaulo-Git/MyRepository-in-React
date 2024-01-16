import React from "react";
import { useRef } from 'react';
import style from '../styles/contact.module.css';
import Iconwpp from '../imgs/iconwhatsapp.png';
import emailjs from '@emailjs/browser';

function Contact(){
    const form:any= useRef();;

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_ghugk18', 'template_2l2uxci', form.current, '9elUetJ2S9BBTp_M0')
      .then((result) => {
        console.log('mensagem enviada')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
   

    return(
        <div id="contact">
            
            <main className={style.containerContact} >
            <form ref={form} onSubmit={sendEmail}>
            <h1 className={style.h1contact}>Conecte-se comigo</h1>
            <input className={style.inputcontact} type="text" name="user_name" placeholder="Nome"  />
            <input className={style.inputcontact} type="email" name="user_email" id="" placeholder="Email" />
            <input className={style.inputcontact} type="text" name="message" id="" placeholder="Mensagem" />
            <input className={style.buttoncontact}type="submit" value="Conectar-se" />
          </form>
           
        </main> 
        
         <span className={style.spann}>(81) 99904-9803
         <img className={style.wpp} src={Iconwpp} style={{width:20,marginLeft:10}}/>
       </span>
        </div>
    )
}
export default Contact;