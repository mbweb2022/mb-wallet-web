

import React from 'react';
import { Ceo } from '../../sections/Ceo/Ceo';
import './UsPageStyle.css';
import FloatingButton from '../Terms/TermsPage';

export const UsPage = () => {
	return (
		<div className='us__page'>
			<Ceo />

			<FloatingButton />

		</div>
	);
};
