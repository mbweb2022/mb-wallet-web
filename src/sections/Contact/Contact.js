

import React, { useState } from 'react'
import { Dashed } from '../../globalStyles'
import './ContactStyle.css';
import { ReactComponent as Manito } from './../mano.svg';
import { NAVBAR_COLOR } from '../../config';
import FloatingButton from '../../pages/Terms/TermsPage'
import { GREY_COLOR } from '../../config';
import axios from 'axios';

const Contact = () => {

    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');

    const formData = {user: "", email: "", detail: ""}
    const [responseBody, setResponseBody] = useState(formData)

    const inputChangeHandler = (event) => {
        const {name, value} = event.target
        setResponseBody({...responseBody, [name]: value})
    }

    const handleSend = (event) => {
        event.preventDefault();

        axios.post('https://api.moneyblinks.com/contactus', responseBody)
            .then((resp) => {
                if(resp.status === 200){
                    setAlertContent('ENVIADO CON EXITO');
                } else {
                    setAlertContent('OCURRIO UN ERROR ENVIANDO EL MAIL');
                }
                setAlert(true);
            })
            .catch((error) => {
                console.log(error)
                setAlertContent('OCURRIO UN ERROR ENVIANDO EL MAIL');
            })
    }

  return (
    <Dashed className='contact__section'>

        <h2 className='contact__title-h2' >CONTACTO</h2>

        <img className='contact__girl' src={'/assets/contact.png'} alt='contactanos' />

        <div className='contact__column'>
            <div className='contact_row'>
                <Manito  style={{ width: 50, height: 30,  marginLeft: 20 }} />
                <p className='contact__title' ><span style={{ color: NAVBAR_COLOR }} >CALL CENTER</span> 1 (954) 895-6169</p>
            </div>
            <div className='contact_row'>
                <Manito style={{ width: 50, height: 30,  marginLeft: 20 }} />
                <p className='contact__title' >POR EMAIL</p>
            </div>

            <div
                className='contact_form_container'
                style={{ marginLeft: 50 }}
            >
                <input
                    type="text"
                    className='contact__input'
                    style={{
                        height: "40px",
                    }}
                    name='user'
                    onChange={(e)=>inputChangeHandler(e)}
                    placeholder="Nombre"
                />
                <input
                    type="text"
                    className='contact__input'
                    name='email'
                    onChange={(e)=>inputChangeHandler(e)}
                    style={{
                        height: "40px",
                    }}
                    placeholder="Mail"
                />
                <textarea
                    type="text"
                    className='contact__input'
                    name='detail'
                    onChange={(e)=>inputChangeHandler(e)}
                    style={{
                        height: "120px",
                        paddingTop: 10,
                        resize: 'none',
                        width: '140%',
                        alignSelf: 'flex-start'
                    }}
                    placeholder="Consulta"
                />
                <button className='sendbutton' onClick={handleSend}>ENVIAR</button>
                
                {alert ? 
                    <div style={{ 
                        width: alertContent === 'ENVIADO CON EXITO' ? 190 : 350, 
                        borderRadius: 5, 
                        backgroundColor: alertContent === 'ENVIADO CON EXITO' ? 'rgb(237, 247, 238)' : 'rgb(255, 240, 241)',
                        padding: 10,
                        marginLeft: 15,
                        marginBottom: 15,
                        color: GREY_COLOR,
                        fontWeight: '500'
                    }} className='alert-div' ><p>{alertContent}</p></div> : <></> 
                }
            </div>
            
            <div className='contact_row'>
                <Manito  style={{ width: 50, height: 30,  marginLeft: 20 }} />
                <p className='contact__title' >CHATEA CON NOSOTROS</p>
            </div>
        </div>

        <FloatingButton />

    </Dashed>
  )
}

export default Contact;
