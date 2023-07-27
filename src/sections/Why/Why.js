/* eslint-disable react/prop-types */
import React, { useRef, useState } from 'react';
import { ReactComponent as Manito } from './../mano.svg';
import './WhyStyles.css';
import { Dashed } from '../../globalStyles';
import { CSSTransition } from 'react-transition-group';
import es from '../../languages/es.json';

export const Why = () => {

	const [creaCuenta, setCreaCuenta] = useState(false);
	const creaRef = useRef(null);
	const [primerEnvio, setPrimerEnvio] = useState(false);
	const primerRef = useRef(null);
	const HandText =({textHand,setFn, setVal})=>{
		return(
			<div className='why__row' style={{ marginRight: 17, marginTop: 10 }} onClick={() => setFn(!setVal)}>
				<Manito className='manito' width={50} height={30} style={{ transform: !setVal ? 'rotate(0deg)' : 'rotate(270deg)' }} />
				<p className='why__text'>{textHand}</p>
			</div>
		);
	};
	const Text =({textInside, inRef, nodeRef, secondText})=>{
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

	return (
		<Dashed
			className='why__section'
		>
			<div />
			<img className='why-img__girl' src='/assets/chica-2.png' alt='chica' />
			<div className='why__column'>
				<HandText textHand={es.CREAR_CUENTA_WHY} setFn={setCreaCuenta} setVal={creaCuenta}/>
				<Text textInside={es.CUENTA_EN_MINUTOS_WHY} inRef={creaCuenta} nodeRef={creaRef} secondText={es.CUENTA_EN_MINUTOS_2_WHY}/>
				<HandText textHand={es.ENVIO_10_WHY} setFn={setPrimerEnvio} setVal={primerEnvio}/>
				<Text textInside={es.RECIBIR_BONO_WHY} inRef={primerEnvio} nodeRef={primerRef} secondText={es.RECIBIR_BONO_2_WHY}/>
			</div>
			<img className='why-img__hand' src='/assets/mano.png' alt='hand' />
			{/* <img className='why-img__phone' src='/assets/celu.png' alt='phone' /> */}
			<div />
		</Dashed>
	);
};
