import React, { useRef, useState } from 'react'
import { Dashed } from '../../globalStyles'
import { ReactComponent as Manito } from './../mano.svg';
import './PricingStyle.css'
import { BLUE_COLOR } from '../../config'
import { CSSTransition } from 'react-transition-group';

export const Pricing = () => {

  const [clickContamos, setClickContamos] = useState(false)
  const nodeRef = useRef(null);

  return (
    <Dashed
        className='pricing__section'
    >
        <h3 className='pricing__title' style={{ color: BLUE_COLOR }} >LOS MEJORES PRECIOS POR ENVÍO</h3>
        <div
          className='pricing__row'
        >
          <div>
            <img alt='corazon1' src='/assets/corazon.png' />
            <p ><span style={{ fontSize: 30 }}>$3,99</span><br/><span style={{ fontSize: 14 }} >ENVIANDO ENTRE</span><br/>$10 y $100</p>
          </div>
          <div>
            <img alt='corazon1' src='/assets/corazon.png' />
            <p><span style={{ fontSize: 30 }} >$4,99</span><br/><span style={{ fontSize: 14 }} >ENVIANDO ENTRE</span><br/>$101 y $200</p>
          </div>
          <div>
            <img alt='corazon1' src='/assets/corazon.png' />
            <p><span style={{ fontSize: 30 }}>$5,99</span><br/><span style={{ fontSize: 14 }} >ENVIANDO ENTRE</span><br/>$201 y $300</p>
          </div>
          <div>
            <img alt='corazon1' src='/assets/corazon.png' />
            <p><span style={{ fontSize: 30 }}>$6,99</span><br/><span style={{ fontSize: 14 }} >ENVIANDO ENTRE</span><br/>$301 y $400</p>
          </div>
          <div>
            <img alt='corazon1' src='/assets/corazon.png' />
            <p><span style={{ fontSize: 30 }}>$7,99</span><br/><span style={{ fontSize: 14 }} >ENVIANDO ENTRE</span><br/>$401 y $500</p>
          </div>
          <div>
            <img alt='corazon1' src='/assets/corazon.png' />
            <p><span style={{ fontSize: 30 }}>$8,99</span><br/><span style={{ fontSize: 14 }} >ENVIANDO ENTRE</span><br/>$501 y $1000</p>
          </div>
        </div>
        <div style={{ display: 'flex' }}>
          <p className='pricing__p' >PAGA SOLAMENTE $2,99 POR ENVÍO, NO IMPORTA LA SUMA QUE ENVÍES, <span onClick={() => setClickContamos(!clickContamos)} >HAS CLICK Y TE CONTAMOS</span></p>
          <Manito onClick={() => setClickContamos(!clickContamos)} className='manito manito_width' style={{ width: '50px', height: 30, marginTop: 5, transform: !clickContamos ? 'rotate(90deg)' : 'rotate(270deg)'  }} />
        </div>
        <CSSTransition
          in={clickContamos}
          nodeRef={nodeRef}
          timeout={300}
          classNames="alert"
          unmountOnExit
        >
          <div ref={nodeRef} className='click__column' >
            <p style={{ textAlign: 'justify', fontWeight: 'normal' }} >Puedes ahorrarte mucho dinero, comprando paquetes de Blinks desde tu app una vez hayas creado una cuenta con MoneyBlinks.<br /><br />Ofrecemos paquetes de: </p>
            <div className='click__row'>
              <p>15 Blinks por $89,99<br />$5,99 por envío</p>
              <p>30 Blinks por $149,99<br />$4,99 por envío</p>
              <p>50 Blinks por $199,99<br />$3,99 por envío</p>
              <p>100 Blinks por $299,99<br />$2,99 por envío</p>
            </div>
          </div>
        </CSSTransition> 
    </Dashed>

  )
}
