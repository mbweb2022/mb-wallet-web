import React from 'react';
import Faqs from '../../sections/Faqs/Faqs';
import './FaqsPageStyle.css';
import FloatingButton from '../Terms/TermsPage';

export const FaqsPage = () => {
	return (
		<div className='faqspage__section'>
			<div className='faqspage__row'>
				<h2 className='faqspage__title' >PREGUNTAS FRECUENTES</h2>
			</div>
			<Faqs />

			<FloatingButton />
		</div>
	);
};
