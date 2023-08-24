/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { ReactComponent as Manito } from './../mano.svg';
import './WhyStyles.css';
import { Dashed } from '../../globalStyles';
import { CSSTransition } from 'react-transition-group';
import es from '../../languages/es.json';

export const Why = () => {
	const creaRef = useRef(null);

	const [creaCuenta, setCreaCuenta] = useState(false);
	const [primerEnvio, setPrimerEnvio] = useState(false);
	const primerRef = useRef(null);

	return (
		<Dashed
			className='why__section'
		>
			<div />
			<img className='why-img__girl' src='https://d3r4ipxr51o1re.cloudfront.net/chica-2.webp' alt='chica' width='225' height='340' />
			<div className='why__column'>
				<HandText textHand={es.CREATE_ACCOUNT_WHY} setFn={setCreaCuenta} setVal={creaCuenta}/>
				<Text textInside={es.ACCOUNTS_IN_MINUTES_WHY} inRef={creaCuenta} nodeRef={creaRef} secondText={es.ACCOUNTS_IN_2MINUTES_WHY}/>
				<HandText textHand={es.SEND_10_WHY} setFn={setPrimerEnvio} setVal={primerEnvio}/>
				<Text textInside={es.RECEIVE_BONUS_WHY} inRef={primerEnvio} nodeRef={primerRef} secondText={es.RECEIVE_BONUS_2_WHY}/>
			</div>
			<img className='why-img__hand' src='https://d3r4ipxr51o1re.cloudfront.net/mano.webp' alt='hand' width='300' height='340'/>
		
			{/* <img className='why-img__phone' src='https://d3r4ipxr51o1re.cloudfront.net/celu.png' alt='phone' /> */}
			<div />
		</Dashed>
	);
};

const HandText =({textHand,setFn, setVal})=>{
	return(
		<div className='why__row' style={{ marginRight: 17, marginTop: 10 }} onClick={() => setFn(!setVal)}>
			<Manito className='manito' width={50} height={30} style={{ transform: !setVal ? 'rotate(0deg)' : 'rotate(270deg)' }} />
			<p className='why__text'>{textHand}</p>
		</div>
	);
};
const Text =({textInside, inRef, nodeRef, secondText})=>{
	const creaRef = useRef(null);
	return (
		<CSSTransition in={inRef} nodeRef={nodeRef} timeout={300} classNames="alert" unmountOnExit>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					margin: '20px 0'
				}}
			>
				<p ref={creaRef} className='crear_text'>
					{textInside}
					{secondText!=null&&<><br /><br />{secondText}</>}             
				</p>
			</div>
		</CSSTransition>
	);
};
export default [HandText , Text];