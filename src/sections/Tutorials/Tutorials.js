/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './TutorialsStyles.css';
import { Dashed } from '../../globalStyles';
import { BLUE_COLOR } from '../../config';
import { useModal } from '../../hooks/UseModal';


const data = [
	{
		id:0,
		title: 'CREACIÓN DE UNA CUENTA.',
		iframe: 'https://d3r4ipxr51o1re.cloudfront.net/CREACION_DE_UNA_CUENTA3.mp4'
	},
	{
		id:1,
		title: 'INGRESO DE INFORMACIÓN ADICIONAL',
		iframe: 'https://d3r4ipxr51o1re.cloudfront.net/DATOS_ADICIONALES3.mp4'
	},
	{
		id:2,
		title: 'REGISTRO DE MEDIOS DE PAGO.',
		iframe: 'https://d3r4ipxr51o1re.cloudfront.net/REGISTRO_DE_FORMA_DE_PAGO3.mp4'
	},
	{
		id:3,
		title: 'ENVÍO DE UN BLINK.',
		iframe: 'https://d3r4ipxr51o1re.cloudfront.net/ENVIO_DE_UN_BLINK3.mp4'
	},
	{
		id:4,
		title: 'PEDIR UN BLINK.',
		iframe: 'https://d3r4ipxr51o1re.cloudfront.net/PEDIR_UN_BLINK3.mp4'
	},
	{
		id:5,
		title: 'RECIBIR UN BLINK.',
		iframe: 'https://d3r4ipxr51o1re.cloudfront.net/RECIBIR_UN_BLINK3.mp4'
	},
];

export const Tutorials = () => {

	const [isOpenModal, openModal, closeModal] = useModal(false);
	const [useUrl, setUseUrl] = useState('');

	const elementos = data.map((element, index) => {
		return <div className="grid-item" key={element.id}>
			<div className='tutorials__element'>
				<div 
					className='tutorials__preview' 
					onClick={ () => {
						setUseUrl(element.iframe);
						openModal();
					}} 
				>
					<iframe className='youtube-video tutorials__iframe' style={{ marginTop: index === 1 ? 8 : 0 }} onClick={openModal} src={element.iframe} title={element.title}  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
					<div className="elemento-delante"></div>
				</div>
				<h4 className='tutorials__desc' style={{ marginTop: 10 }} ><span style={{color: BLUE_COLOR}}>{index + 1}.</span> {element.title}</h4>
			</div>
		</div>;
	});

	return (
		<Dashed>
			<div className='tutorials__section'>
				<h3 className='tutorials__title' >TUTORIALES</h3>
				<p className='tutorials__subtitle'>PASOS PARA USAR NUESTRA APP</p>
				<div className="grid-container">
					{ elementos }
				</div>
				<Modal isOpen={isOpenModal} closeModal={() => {
					setUseUrl('');
					closeModal();
				}}>
					<iframe className='yt_player_iframe' width={window.innerWidth < 560 ? window.innerWidth : 560} height="315" src={useUrl} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
				</Modal>
			</div>
		</Dashed>
	);
};



const Modal = ({ children, isOpen, closeModal }) => {
	const handleModalContainerClick = (e) => e.stopPropagation();
  
	return (
		<article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
			<div className="modal-container" onClick={handleModalContainerClick}>
				<button className="modal-close" onClick={closeModal}>
            X
				</button>
				{children}
			</div>
		</article>
	);
};
  
export default Modal;