/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './TutorialsStyles.css';
import { Dashed } from '../../globalStyles';
import { BLUE_COLOR } from '../../config';
import { useModal } from '../../hooks/UseModal';
import videos from '../../data/videos.json';


const data = [
	{
		id:0,
		title: videos.CREATION_OF_AN_ACCOUNT_TITLE,
		iframe: videos.CREATING_AN_ACCOUNT_URL
	},
	{
		id:1,
		title: videos.ADDITIONAL_INFORMATION_ENTRY_TITLE,
		iframe: videos.ADDITIONAL_INFORMATION_ENTRY_URL
	},
	{
		id:2,
		title: videos.PAYMENT_MEANS_REGISTRATION_TITLE,
		iframe: videos.PAYMENT_MEANS_REGISTRATION_URL
	},
	{
		id:3,
		title: videos.SEND_A_BLINK_TITLE,
		iframe: videos.SEND_A_BLINK_URL
	},
	{
		id:4,
		title: videos.REQUEST_A_BLINK_TITLE,
		iframe: videos.REQUEST_A_BLINK_URL
	},
	{
		id:5,
		title: videos.RECEIVE_A_BLINK_TITLE,
		iframe: videos.RECEIVE_A_BLINK_URL
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
					{/* <iframe className='youtube-video tutorials__iframe' style={{ marginTop: index === 1 ? 8 : 0 }} onClick={openModal} src={element.iframe} title={element.title} allowFullScreen></iframe> */}
					<video controls loop className='youtube-video tutorials__iframe' style={{ marginTop: index === 1 ? 8 : 0 }} >
						<source src={element.iframe} type="video/mp4"/>
					</video> 

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
					<iframe className='yt_player_iframe embed-responsive-item' src={useUrl} title="YouTube video player" allowFullScreen></iframe>
					{/* <video controls loop className='videoHug' >
						<source src={useUrl} type="video/mp4"/>
					</video>  */}
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