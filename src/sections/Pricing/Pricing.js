import React, { useRef, useState } from 'react';
import { Dashed } from '../../globalStyles';
import { ReactComponent as Manito } from './../mano.svg';
import './PricingStyle.css';
import { BLUE_COLOR } from '../../config';
import { CSSTransition } from 'react-transition-group';
import es from '../../languages/es.json';

export const Pricing = () => {

	const [clickContamos, setClickContamos] = useState(false);
	const nodeRef = useRef(null);
	// eslint-disable-next-line react/prop-types
	const Heart =({ price, rank})=>{
		return(
			<div>
				<img alt='corazon1' src={'/assets/corazon.png'} />
				<p ><span style={{ fontSize: 30 }}>{price}</span><br/><span style={{ fontSize: 14 }} >{es.ENVIANDO_ENTRE_PRICING}</span><br/>{rank}</p>
			</div>
		);	
	};

	return (
		<Dashed
			className='pricing__section'
		>
			<h3 className='pricing__title' style={{ color: BLUE_COLOR }} >{es.MEJORES_PRECIOS_PRICING}</h3>
			<div
				className='pricing__row'
			>
				<Heart price={'$3,99'} rank={'$10 y $100'}/>
				<Heart price={'$4,99'} rank={'$101 y $200'}/>
				<Heart price={'$5,99'} rank={'$201 y $300'}/>
				<Heart price={'$6,99'} rank={'$301 y $400'}/>
				<Heart price={'$7,99'} rank={'$401 y $500'}/>
				<Heart price={'$8,99'} rank={'$501 y $1000'}/>
			</div>
			<div style={{ display: 'flex' }}>
				<p className='pricing__p' >{es.PAGAR_ENVIO_PRICING}<span onClick={() => setClickContamos(!clickContamos)} >{es.HAZ_CLICK}</span></p>
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
					<p style={{ textAlign: 'justify', fontWeight: 'normal' }} >{es.AHORRAR_DINERO_PRICING}.<br /><br />{es.OFRECEMOS_PRICING}</p>
					<div className='click__row'>
						<p>15 Blinks por $89,99<br />$5,99 por envío</p>
						<p>30 Blinks por $149,99<br />$4,99 por envío</p>
						<p>50 Blinks por $199,99<br />$3,99 por envío</p>
						<p>100 Blinks por $299,99<br />$2,99 por envío</p>
					</div>
				</div>
			</CSSTransition> 
		</Dashed>

	);
};
