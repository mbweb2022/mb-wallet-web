/* eslint-disable react/prop-types */
import React from 'react';
import './DownloadButton.css';

export const DownloadButton = ({ imageUrl,href, text, title}) => {
	return (
		<button  className="button-container-download" type='button'>
			<a
				href={href}
				target="_blank" 
				rel="noopener noreferrer"
				style={{
					display: 'flex',
					textDecoration:'none'
				}}
			>
				<img src={imageUrl} alt="Imagen Botón" width='45' height='45'/>
				<div className="text-container">
					<p>{text}</p>
					<p>{title}</p>
				</div>
			</a>
		</button>
	);
};