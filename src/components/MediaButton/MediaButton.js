/* eslint-disable react/prop-types */
import React from 'react';
import './MediaButton.css';

export const MediaButton = ({ imageUrl,href}) => {
	return (
		<button  className="button-container" type='button'>
			<a
				href={href}
				target="_blank" 
				rel="noopener noreferrer"
				style={{
					display: 'flex'
				}}
			>
				<img src={imageUrl} alt="Imagen Botón" width='40' height='40'/>
			</a>
		</button>
	);
};