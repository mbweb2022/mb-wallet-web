

import React, { useState } from 'react';
import { NAVBAR_COLOR } from '../../config';
import { ReactComponent as Manito } from '../../sections/mano.svg';
import { Dashed } from '../../globalStyles';
import './WhyPageStyle.css';
import FloatingButton from '../Terms/TermsPage';


const desc1 = (
	<div className='ml50'>
		<p className='why-page__p' style={{ marginBottom: 10 }} >Facilitar el proceso de envío y recepción de dinero protegiendo la información sensible de los usuarios. Nuestra plataforma opera en una interfaz simple y fácil de usar, asegurando:</p>
		<ul>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>RAPIDEZ:</b> Envía y recibe tu dinero en minutos.</p>
			</li>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>SEGURIDAD:</b> No necesitas compartir tu información financiera y tus datos siempre están seguros.</p>
			</li>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>SIMPLICIDAD:</b> La interfaz es muy sencilla e intuitiva, facilitando enviar y recibir tu dinero de manera súper fácil.</p>
			</li>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>EL MENOR COSTO:</b> MoneyBlinks no cobra valores porcentuales del monto enviado y al mejor tipo de cambio del mercado siempre.</p>
			</li>
		</ul>
	</div>
);

const desc2 = (
	<div className='ml50' >
		<p className='why-page__p'>MoneyBlinks recibe el pago del remitente a través de tarjetas de crédito o débito de cuenta bancaria. Una vez procesado el envío, se acreditará al destinatario los fondos enviados según su preferencia de pago: efectivo o transferencia bancaria. </p>
	</div>
);

const desc3 = (
	<>
		<ul>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>SOLO 3 CLICKS:</b> Y podrás enviar dinero o solicitarlo.</p>
			</li>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>PRIVACIDAD TOTAL:</b> No necesitas compartir tu información financiera.</p>
			</li>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>REDES SOCIALES:</b> Envía dinero por Whatsapp, Facebook, Instagram, Twitter, LinkedIn y Skype</p>
			</li>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>ENVÍO DIRECTO:</b> A una cuenta bancaria o incluso a tu propia cuenta en el extranjero.</p>
			</li>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>ENVÍO CON PROPÓSITO:</b> En vez de dinero, tu familia recibirá directamente productos de alimentos, material educativo y de salud.</p>
			</li>
			<li className='ml40' style={{ marginBottom: 10 }}>
				<p className='why-page__p'><b>PAQUETES DE ENVÍOS:</b> Compra envíos prepagados para obtener precios de hasta USD $2,99 por Blink sin importar el valor que envíes.</p>
			</li>
		</ul>
	</>
);

const titles = [
	{ id: 1, title: '¿Qué ofrecemos?', desc: desc1 },
	{ id: 2, title: '¿Cómo funciona?', desc: desc2 },
	{ id: 3, title: 'Ventajas de MoneyBlinks', desc: desc3 },
];

export const WhyPage = () => {

	const [showFaq, setShowFaq] = useState('');
	const [showQue, setShowQue] = useState('');

	const elementos = titles.map((elemento) => {
		return <div
			key={elemento.id}
			className='faqs__row'
			style={{ marginBottom: 20 }}
			onClick={() => {
				setShowFaq(elemento.title);
				setShowQue(elemento.desc);
			}}
		>
			<Manito width={50} height={30} />
			<p style={{ color: NAVBAR_COLOR }} className='faqs__text'>{elemento.title}</p>
		</div>;
	});

	return (
		<Dashed
			className='why-page__section'
		>
			<img className='why-img__boy' src={'/assets/men-1.png'} alt='men_sending_money' />
			<div className='whypage__row'>
				<h2 className='faqspage__title' >¿POR QUÉ MONEYBLINKS?</h2>
			</div>
			<div className='why-container'>
				<div className='why-page__column'>
					{
						showFaq === ''
							? <div className='why-page_showfaq'>
								{elementos}
							</div>
							: <div className='why-page_dontfaq'>

								<div className='faqs__column why-page_dontfaqcol'>
									<div className='faqs__row'>
										<Manito width={50} height={30} />
										<p className='faqs__text' style={{ color: NAVBAR_COLOR }} >{showFaq}</p>
									</div>

									<span className='faqs__detail'>{showQue}</span>

									<div className='faqs__row' onClick={() => setShowFaq('')}>
										<Manito style={{ transform: 'rotateY(180deg)' }} width={50} height={30} />
										<p className='faqs__text' style={{ color: NAVBAR_COLOR }} >VOLVER A POR QUÉ MONEYBLINKS</p>
									</div>
								</div>
							</div>
					}

				</div>
			</div>

			<FloatingButton />

		</Dashed>
	);
};
