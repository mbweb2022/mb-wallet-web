

import React, { useState } from 'react';
import { Dashed } from '../../globalStyles';
import './FaqsStyle.css';
import { ReactComponent as Manito } from './../mano.svg';
import { BLUE_COLOR, NAVBAR_COLOR } from '../../config';
import { Link } from 'react-router-dom';
import { useModal } from '../../hooks/UseModal';
import Modal from '../Tutorials/Tutorials';
import videos from '../../data/videos.json';

const titles2 = [
	{ title: '¿Dónde recibe el dinero mi familia?', desc: <p className='faqs__detail'>Tu familia recibe el dinero donde tú desees: transferencia a una cuenta bancaria registrada o retiro del saldo en efectivo. En Ecuador contamos con la red autorizada de Servipagos.</p> },
	{ title: '¿Cuánto tarda el dinero en llegar a mi familia?', desc: <p className='faqs__detail'>El envío es inmediato. Si el receptor decide enviarlo a su cuenta bancaria el proceso automatizado tarda aproximadamente 10 minutos para que el dinero se vea reflejado en dicha cuenta.</p> },
	{ title: '¿En qué consiste el seguro médico para mi familia en Ecuador?', desc: <p className='faqs__detail'>Desde el primer envío* puedes registrar hasta 3 miembros de tu familia en Ecuador en el link que recibiste en tu correo electrónico de confirmación. Si tienen la necesidad de ser atendidos por un médico y recibir medicina, podrán hacerlo de forma gratuita llamando al número del call center que recibiste en dicho correo electrónico.<br /><br />*No aplica al envío de USD 10 de prueba.</p> },
	{ title: '¿En qué consiste el seguro de vida para quién envía dinero desde Estados Unidos?', desc: <p className='faqs__detail'>Desde el primer envío* puedes registrar al beneficiario en el link que recibiste en tu correo electrónico de confirmación. En caso de que tengas un accidente ese beneficiario recibirá hasta USD $5,000 y USD 1,000 en Ecuador para gastos de sepelio y traslado.<br /><br />*No aplica al envío de USD 10 de prueba.</p> },
	{ title: '¿Dónde opera MoneyBlinks?', desc: <p className='faqs__detail'>Actualmente MoneyBlinks opera en el Estado de New Jersey en USA y en Ecuador. Estamos expandiendo activamente nuestras operaciones hasta cubrir todo el territorio de Estados Unidos y la región de América Latina.</p> },
	{ title: '¿Qué es y cómo funciona un Envío con Propósito?', desc: <p className='faqs__detail'>Envío con Propósito es un servicio para que tu familia reciba los productos que necesite, como despensa y abarrotes, medicinas, material educativo y de salud; entre otros. Ingresa los datos de tu familiar y escoge las canastas predefinidas a enviar al local comercial más cercano a su ubicación geográfica o déjalo libre por el monto del valor enviado. Recibirás una notificación una vez se retiren los productos enviados.</p> },
	{ title: '¿Cómo puedo pagar el dinero a enviar?', desc: <p className='faqs__detail'>Puedes pagarlos con débito de tu cuenta bancaria o con una tarjeta de débito o crédito Visa o Mastercard, o también en Ecuador a través de la red autorizada de Servipagos.</p> },
	{ title: '¿Es seguro usar MoneyBlinks?', desc: <p className='faqs__detail'>¡Súper seguro! MoneyBlinks es una empresa autorizada por los reguladores de <Link to='/licenses' style={{ textDecoration: 'none', color: 'rgb(73,73,73)' }} >Estados Unidos FINCEN y El Departamento de Banca y Seguro de Cada Estado</Link> para operar enviando tu dinero forma fácil, rápida y segura, ¡compruébalo por ti mismo enviando tu primer Blink por nuestra cuenta!</p> },
];

const Faqs = () => {

	const [isOpenModal, openModal, closeModal] = useModal(false);
	const [useUrl, setUseUrl] = useState('');

	const [showFaq, setShowFaq] = useState('');
	const [showQue, setShowQue] = useState('');

	const titles = [
		{ id: 1, title: '¿Qué es MoneyBlinks?', desc: <p className='faqs__detail'>Una plataforma segura de envíos internacionales de dinero. Con el compromiso de un servicio confiable y herramientas de construcción de resiliencia financiera que incluyen: seguro médico y de vida para tu familia, educación y asesoría financiera, becas de desarrollo técnico y profesional, programas de apoyo y acogida al migrante de reciente ingreso y asesoría legal migratoria para los miembros de nuestra comunidad MoneyBlinks.</p> },
		{ id: 2, title: '¿Cómo descargo MoneyBlinks?', desc: <p className='faqs__detail'>Descarga <b>MoneyBlinks Wallet</b> en Apple Store para Iphone o Google Play para Android.</p> },
		{
			id: 3, title: '¿Qué necesito para abrir mi cuenta MoneyBlinks?', desc: <p className='faqs__detail'>Crea tu cuenta, pulsando <span className='faqs__bold'>“REGISTRARSE”</span>, completa todos los campos requeridos. Número de teléfono y correo electrónico te servirán para confirmación de envíos y recepción de Blinks.<br /><br />Crea un nombre de usuario como identificador principal para enviar o recibir un Blink y crea tu contraseña, si la olvidas pulsa <span className='faqs__bold'>“OLVIDASTE TU CONTRASEÑA”</span> para recuperarla. Ingresa tus nombres y apellidos completos tal como están en tu ID o pasaporte para ser validados posteriormente.<br /><br />Verifica que el botón <span className='faqs__bold'>“HE LEÍDO Y ACEPTO LOS TÉRMINOS Y CONDICIONES”</span> tenga un signo check en azul.<br /><br />Si todos los campos están correctos, pulsa <span className='faqs__bold'>“REGISTRARSE”</span>. Ingresa el código que recibiste por correo electrónico en el campo correspondiente.<br /><br /><span className='link_text' onClick={() => {
				setUseUrl(videos.CREATING_AN_ACCOUNT_URL);
				openModal();
			}} >Pasos para crear una cuenta</span></p>
		},
		{
			id: 4, title: '¿Cómo ingreso datos adicionales?', desc: <p className='faqs__detail'>Ya en la app, necesitaremos un selfie y una foto de tu identificación, que puede ser tu pasaporte o la identificación de tu país de origen. La foto debe ser clara y legible para que el equipo de seguridad de MoneyBlinks pueda confirmar y validar tu identidad.<br /><br />Completa el número de identificación que subiste, fecha de nacimiento y tu domicilio.<br /><br />Sigue las instrucciones de la guía Moneyblinks. Si necesitas ayuda adicional, pulsa el botón (?) para ver el video tutorial que te guiará mientras llenas esa información.<br /><br /><span className='link_text' onClick={() => {
				setUseUrl(videos.ADDITIONAL_INFORMATION_ENTRY_URL);
				openModal();
			}} >Pasos para ingresar información adicional</span></p>
		},
		{
			id: 5, title: '¿Cómo ingreso formas de pago?', desc: <p className='faqs__detail'>Ingresa a <b>“MI CUENTA”</b> y escoge entre tarjetas o cuentas bancarias y pulsa el botón (+). Selecciona el banco y tipo de cuenta de cheque o ahorro que vas a registrar. Ingresa los datos relacionados con tu cuenta: domicilio, correo electrónico y teléfono. Si tu cuenta es de Estados Unidos, será a través de un canal seguro (toquen) de la plataforma de seguridad de Plaid.<br /><br />Pulsa <b>“GUARDAR CUENTA”</b> y listo, esa cuenta bancaria ha quedado registrada.<br /><br />La forma de pago ingresada se utilizará para enviar, pagar, descargar dinero entrante, recargar tu saldo MoneyBlinks o comprar paquetes pre pagados de Blinks.<br /><br /><span className='link_text' onClick={() => {
				setUseUrl(videos.PAYMENT_MEANS_REGISTRATION_URL);
				openModal();
			}} >Pasos para registrar medios de pago</span></p>
		},
		{
			id: 6, title: '¿CÓMO ENVÍO UN BLINK?', desc: <p className='faqs__detail'>Pulsa <b>“ENVIAR”</b> en la pantalla de Inicio. Selecciona el medio de pago e ingresa el valor que deseas enviar, el mínimo es USD $10 y el máximo es USD $1,000. Pulsa <b>“ENVIAR A”</b> y escoge el destinatario, cuentas bancarias o envíos con propósito. Incluye un mensaje y notifica a hasta tres números telefónicos y correos electrónicos sobre tu envío si deseas<br /><br />En los envíos a redes sociales, te llegará una notificación con el código que recibió el receptor para que confirmes que es la persona correcta.<br /><br />Pulsa <b>“ENVIAR”</b>. Utilizaremos los biométricos de tu teléfono: tu huella digital o tu reconocimiento facial, o en última instancia el código que usas para desbloquear el teléfono para asegurarnos que nadie más que tu envíe dinero desde tu cuenta.<br /><br />Recibirás una notificación que tu Blink fue descargado que podrás guardar como respaldo.<br /><br /><span className='link_text' onClick={() => {
				setUseUrl(videos.SEND_A_BLINK_URL);
				openModal();
			}}>Pasos para enviar un Blink</span></p>
		},
		{
			id: 7, title: '¿CÓMO RECIBO UN BLINK?', desc: <p className='faqs__detail'>Recibirás una notificación a tu correo electrónico y mensaje de texto. Toca la campana en la parte superior derecha de tu app y accede a la notificación correspondiente. Selecciona la opción para recibir el Blink: descargarlo a tu saldo de manera inmediata, transferirlo a tu cuenta bancaria se verá reflejado en pocos minutos o retirar tu saldo efectivo.  En Ecuador contamos con la red autorizada de Servipagos.<br /><br />Ingresa el código de 8 caracteres que recibiste en el correo electrónico o mensaje de texto y pulsa <b>“ACEPTAR”</b>.<br /><br />Si recibes un código de envío Blink por alguna red social, en tu app ingresa el código en <b>“¿TIENES UN CÓDIGO?”</b> en la pantalla de inicio. Una vez quien te envió el Blink confirme tu identidad, podrás recibir y disponer de ese Blink tal como lo explicamos anteriormente.<br /><br /><span className='link_text' onClick={() => {
				setUseUrl(videos.RECEIVE_A_BLINK_URL);
				openModal();
			}}>Pasos para recibir un Blink</span></p>
		},
		{
			id: 8, title: '¿CÓMO PIDO UN BLINK?', desc: <p className='faqs__detail'>Pulsa <b>“PEDIR”</b> en la pantalla de inicio y busca a quién le vas a pedir el Blink por nombre o usuario. Ingresa el valor que estás pidiendo y un mensaje de texto si deseas.<br /><br />Pulsa <b>“ACEPTAR”</b> y tu pedido se ha realizado con éxito. Si la persona acepta, recibirás un Blink por el valor pedido, si lo rechaza recibirás una notificación de que tu pedido ha sido rechazado.<br /><br /><span className='link_text' onClick={() => {
				setUseUrl(videos.REQUEST_A_BLINK_URL);
				openModal();
			}}>Pasos para pedir un Blink</span></p>
		},
	];

	const elementos = titles.map((elemento, index) => {
		return <div
			key={`title-${index}`}
			className='faqs__row'
			onClick={() => {
				setShowFaq(elemento.title);
				setShowQue(elemento.desc);
			}}
		>
			<Manito width={50} height={30} />
			<p className='faqs__text' style={{ color: index % 2 === 0 ? NAVBAR_COLOR : BLUE_COLOR }} >{elemento.title}</p>
		</div>;
	});

	const elementos2 = titles2.map((elemento, index) => {
		return <div
			key={`title2-${index}`}
			className='faqs__row'
			onClick={() => {
				setShowFaq(elemento.title);
				setShowQue(elemento.desc);
			}}
		>
			<Manito className='responsive_mano' width={index === 3 && window.innerWidth > 1000 ? 65 : 50} height={30} />
			<p className='faqs__text' style={{ color: index % 2 === 0 ? NAVBAR_COLOR : BLUE_COLOR }} >{elemento.title}</p>
		</div>;
	});

	return (
		<Dashed
			className='faqs__section'
		>
			<div />

			{
				showFaq !== '' && <img className='faqs-img__girl' src={'/assets/men-1.png'} alt='chica' />
			}

			<div className='faqs__column'>
				{
					showFaq === ''
						? <div className='faqs__row responsive_row' >
							<div className='faqs__column' style={{ marginLeft: 0 }}>
								{elementos}
							</div>
							<div className='faqs__column' style={{ marginLeft: 0 }}>
								{elementos2}
							</div>

						</div>
						: <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>

							<div className='faqs__column ml0w50'>
								<div className='faqs__row'>
									<Manito width={50} height={30} />
									<p className='faqs__text' style={{ color: NAVBAR_COLOR }} >{showFaq}</p>
								</div>

								{showQue}

								<div className='faqs__row mt15' onClick={() => setShowFaq('')}>
									<Manito style={{ transform: 'rotateY(180deg)' }} width={50} height={30} />
									<p className='faqs__text' style={{ color: NAVBAR_COLOR }} >VOLVER A PREGUNTAS FRECUENTES</p>
								</div>
							</div>
						</div>

				}
			</div>

			<div />
			<Modal isOpen={isOpenModal} closeModal={() => {
				setUseUrl('');
				closeModal();
			}}>
				<iframe className='yt_player_iframe' width="560" height="315" src={useUrl} title="YouTube video player" allowFullScreen></iframe>
			</Modal>
		</Dashed>
	);
};

export default Faqs;