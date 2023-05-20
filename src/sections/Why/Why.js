

import React, { useRef, useState } from 'react'
import { ReactComponent as Manito } from './../mano.svg';
import './WhyStyles.css'
import { Dashed } from '../../globalStyles'
import { CSSTransition } from 'react-transition-group';

export const Why = () => {

  const [creaCuenta, setCreaCuenta  ] = useState(false);
  const creaRef = useRef(null);

  const [primerEnvio, setPrimerEnvio  ] = useState(false);
  const primerRef = useRef(null);

  return (
    <Dashed
        className='why__section'
    >
        <div />

        <img className='why-img__girl' src='/assets/chica-2.png' alt='chica' />

        <div className='why__column'>
          <div className='why__row' onClick={() => setCreaCuenta(!creaCuenta)} >
            <Manito className='manito'  width={50} height={30} style={{ transform: !creaCuenta ? 'rotate(0deg)' : 'rotate(270deg)' }} />
            <p className='why__text' >CREA TU CUENTA MONEYBLINKS EN MINUTOS</p>
          </div>

          <CSSTransition
            in={creaCuenta}
            nodeRef={creaRef}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 0'
              }}
            >
              <p 
                ref={creaRef} 
                className='crear_text'
              >
                Crea tu cuenta en pocos minutos de la misma manera que creas una cuenta bancaria digital. Ingresa tus datos básicos y recibirás un mensaje de verificación a tu correo o tu número telefónico.<br /><br/>Al ingresar a tu cuenta por primera vez, sigue el tutorial y completa tus datos básicos que nos permiten conocerte y cumplir con la normativa internacional de prevención de lavado de activos. En menos de 10 minutos estarás listo para enviar y recibir dinero de forma rápida y segura.
              </p>
            </div>
          </CSSTransition>

          <div className='why__row' style={{ marginRight: 17, marginTop: 10 }} onClick={() => setPrimerEnvio(!primerEnvio)}>
            <Manito className='manito' width={50} height={30} style={{ transform: !primerEnvio ? 'rotate(0deg)' : 'rotate(270deg)' }} />
            <p className='why__text'>TE REGALAMOS $10 PARA TU PRIMER ENVÍO</p>
          </div>

          <CSSTransition
            in={primerEnvio}
            nodeRef={primerRef}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                margin: '20px 0'
              }}
            >
              <p 
                className='crear_text'
                ref={primerRef} 
              >
                Crea tu cuenta MoneyBlinks y recibirás un bono de USD $10 y 3 envíos gratuitos para comprobar por ti mismo lo rápido, seguro y simple que es enviar dinero a tu familia.<br /><br/>Solo tienes que bajar la app, completar tu información y una vez validada y aprobada, en minutos verás el saldo disponible para enviar a quien desees. 
              </p>
            </div>
          </CSSTransition>

        </div>

        <img className='why-img__hand' src='/assets/mano.png' alt='hand' />

        <img className='why-img__phone' src='/assets/celu.png' alt='phone' />

        <div />
    </Dashed>
  )
}
