

import React, { useState } from 'react'
import { Dashed } from '../../globalStyles'
import './ContactStyle.css';
import { ReactComponent as Manito } from './../mano.svg';
import { NAVBAR_COLOR } from '../../config';
import FloatingButton from '../../pages/Terms/TermsPage'
import { GREY_COLOR } from '../../config';
import axios from 'axios';
import { validateComment, validateEmail, validateUser } from '../../validations/validateRegex';
const Contact = () => {
  
    const [alert, setAlert] = useState(false);
    const [alertContent, setAlertContent] = useState('');
    const [isValid, setIsValid]=useState(true);
    const formData = {user: "", email: "", detail: ""}
    const [responseBody, setResponseBody] = useState(formData);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidUser, setIsValidUser] = useState(false);
    const [isValidComment, setIsValidComment] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [errorTextEmail, setErrorTextEmail] = useState('');
    const [errorTextUser, setErrorTextUser] = useState('');
    const [errorTextComment, setErrorTextComment] = useState('');
    const [isLoading, setLoading] = React.useState(false);

    const inputChangeHandler = (event) => {
        
        const {name, value} = event.target;
        handleValidateData(name, value);
        
        setResponseBody({...responseBody, [name]: value})
    }


    const handleValidateData = (name, value)=>{
        
        if(name==="user"){
            let response= validateUser(value);
            setIsValidUser(response.Result);
            setHasInteracted(true);
            setErrorTextUser(response.message);
        }
        if(name==="email"){
            let response= validateEmail(value);
            setIsValidEmail(response.Result);
            setHasInteracted(true);
            setErrorTextEmail(response.message);
        }
        if(name==="detail"){
            let response= validateComment(value);
            setIsValidComment(response.Result);
            setHasInteracted(true);
            setErrorTextComment(response.message);
        }
        if(isValidUser&&isValidComment&&isValidEmail){
            setIsValid(false);
        }
    }

    
    const handleSend = (event) => {
        setLoading(true);
        event.preventDefault();
        axios.post('https://zwu92jsgu1.execute-api.us-east-1.amazonaws.com/web/contactus', responseBody)
            .then((resp) => {
                if(resp.status === 200){
                    setAlertContent('ENVIADO CON EXITO');
                } else {
                    setAlertContent('OCURRIO UN ERROR ENVIANDO EL MAIL');
                }                
                document.getElementById("user").value="";
                document.getElementById("email").value="";
                document.getElementById("detail").value="";
                setAlert(true);
                setLoading(false);

            })
            .catch((error) => {
                setAlert(true);
                console.log("Ocurrio un error:" ,error)
                setAlertContent('OCURRIO UN ERROR ENVIANDO EL MAIL');
                setLoading(false);
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
                id="user"
                    type="text"
                    className='contact__input'
                    style={{
                        height: "40px",
                    }}
                    name='user'
                    onChange={(e)=>inputChangeHandler(e)}
                    placeholder="Nombre"
                    required
                    disabled={isLoading}
                />
                    {!isValidUser&&errorTextUser && hasInteracted && <p className="error-message">{errorTextUser}</p>}

                <input
                    id="email"
                    type="email"
                    className='contact__input'
                    name='email'
                    onChange={(e)=>inputChangeHandler(e)}
                    style={{
                        height: "40px"
                    }}
                    placeholder="Mail"
                    required
                    disabled={isLoading}

                />
                    {!isValidEmail&&errorTextEmail && hasInteracted && <p className="error-message">{errorTextEmail}</p>}
                <textarea
                id="detail"
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
                    placeholder="Motivo de consulta"
                    disabled={isLoading}

                    />
                    {!isValidComment&&errorTextComment && hasInteracted && <p className="error-message">{errorTextComment}</p>}
                <div className='row-button'>
                <div class="column"><button className='sendbutton'style={{backgroundColor:isValid?"#878A8E":'rgb(206, 219, 30)',color:isValid?GREY_COLOR:'white'}} onClick={handleSend} disabled={isValid}>ENVIAR</button></div>
                <div class="column">
                {isLoading ? <div className="loadingdiv">
                        <img src={'/assets/svg/cargando.svg'}width={234} alt="loading"/>
                        <span style={{ fontSize: 18, fontFamily: "sans-serif" }}>Cargando, espera un momento...</span>
                    </div> : null}    
                </div>
                    
                   
                </div>           
                
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
