

import React from 'react';
import { Dashed } from '../../globalStyles';
import FloatingButton from '../Terms/TermsPage';
import { Tutorials } from '../../sections/Tutorials/Tutorials';

export const TutorialsPage = () => {
	return (
		<Dashed className='faqspage__section'>
			<Tutorials />

			<FloatingButton />
		</Dashed>
	);
};
