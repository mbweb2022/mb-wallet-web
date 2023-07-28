/* eslint-disable react/prop-types */
import React from 'react';
import { Dashed } from '../../globalStyles';
import { NAVBAR_COLOR } from '../../config';
import './FooterStyle.css';
import { Link } from 'react-router-dom';

export const Footer = () => {

	return (
		<Dashed>
			<ColoredRow color={NAVBAR_COLOR} />
			<div className='footer__row' >
				<Link to='/terms' className='footer__p' >
                TÉRMINOS Y CONDICIONES
				</Link>
				<Link to='/privacy' className='footer__p' >
                POLÍTICAS DE PRIVACIDAD
				</Link>
				<Link to='/licenses' className='footer__p'>
                LICENCIAS
				</Link>
			</div>
		</Dashed>
	);
};


const ColoredRow = ({ color }) => {
	return (
		<div
			style={{
				width: '99.7%',
				height: '3px',
				backgroundColor: color,
				display: 'flex',
			}}
		>
			{[...Array(Math.ceil(window.innerWidth / 2))].map((_, index) => (
				<div
					key={index}
					style={{
						width: '3px',
						height: '3px',
						backgroundColor: index % 2 === 0 ? color : 'white',
					}}
				/>
			))}
		</div>
	);
};