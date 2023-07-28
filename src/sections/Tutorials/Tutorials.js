/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './TutorialsStyles.css';
import { Dashed } from '../../globalStyles';
import { BLUE_COLOR } from '../../config';
import { useModal } from '../../hooks/UseModal';


const data = [
	{
		title: 'CREACIÓN DE UNA CUENTA.',
		url: 'szyujc7hWIE',
		iframe: 'https://www.youtube.com/embed/szyujc7hWIE'
	},
	{
		title: 'INGRESO DE INFORMACIÓN ADICIONAL',
		url: 'ntz8fYp9BFk',
		iframe: 'https://www.youtube.com/embed/ntz8fYp9BFk'
	},
	{
		title: 'REGISTRO DE MEDIOS DE PAGO.',
		url: 'pmJc75o6DYY',
		iframe: 'https://www.youtube.com/embed/pmJc75o6DYY'
	},
	{
		title: 'ENVÍO DE UN BLINK.',
		url: '44BcM5IUqDc',
		iframe: 'https://www.youtube.com/embed/44BcM5IUqDc'
	},
	{
		title: 'PEDIR UN BLINK.',
		url: 'dmyWbTglDPk',
		iframe: 'https://www.youtube.com/embed/dmyWbTglDPk'
	},
	{
		title: 'RECIBIR UN BLINK.',
		url: '9rfN0Z4hzF0',
		iframe: 'https://www.youtube.com/embed/9rfN0Z4hzF0'
	},
];

export const Tutorials = () => {

	const [isOpenModal, openModal, closeModal] = useModal(false);
	const [useUrl, setUseUrl] = useState('');

	const elementos = data.map((element, index) => {
		return <div className="grid-item" key={index}>
			<div className='tutorials__element'>
				<div 
					className='tutorials__preview' 
					onClick={ () => {
						setUseUrl(element.iframe);
						openModal();
					}} 
					style={{ position: 'relative', width: '100%'}}
				>
					<iframe className='youtube-video tutorials__iframe' style={{ marginTop: index === 1 ? 8 : 0 }} onClick={openModal} src={element.iframe} title={element.title}  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowFullScreen></iframe>
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