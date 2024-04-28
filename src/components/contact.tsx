import React, { useState } from "react";
import { useRef } from 'react';
import style from '../styles/contact.module.css';
import emailjs from '@emailjs/browser';

function Contact(){
    const form:any= useRef();
    const [msg,setMsg]=useState('')
    const [formData, setFormData] = useState({
      user_name: '',
      user_email: '',
      message: ''
  });

  const handleChange = (e:any) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
          ...prevData,
          [name]: value
      }));
  };

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm(
        'service_ghugk18', 'template_2l2uxci', form.current, '9elUetJ2S9BBTp_M0')
      .then((result) => {
        console.log('mensagem enviada')
          console.log(result.text);
          setMsg('Mensagem enviada !')
          setFormData({
            user_name: '',
            user_email: '',
            message: ''
        });
      }, (error) => {
          console.log(error.text);
          setMsg('Mensagem não enviada !')
       
      });
      setTimeout(() => {
        setMsg(''); // Clear the message after 3000 milliseconds (3 seconds)
    }, 5000);
    }
   

    return(
        <div id="contact">
            
            <main className={style.containerContact} >
          <form ref={form} onSubmit={sendEmail}>
            <h1 className={style.h1contact}>Entre em contato</h1>
            <input className={style.inputcontact} onChange={handleChange} type="text"  value={formData.user_name}  name="user_name" placeholder="Nome"  />
            <input className={style.inputcontact} onChange={handleChange}  type="email"  value={formData.user_email} name="user_email" id="" placeholder="Email" />
            <input className={style.inputcontact} onChange={handleChange}  type="text"  value={formData.message} name="message" id="" placeholder="Mensagem" />
            <input className={style.buttoncontact} onChange={handleChange} type="submit" value="Enviar" />
          </form>
          {msg && <div className={style.msgContato}><span></span>{msg}</div>}
          
        </main> 
      
        </div>
    )
}
export default Contact;