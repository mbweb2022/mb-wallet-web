

import React from 'react';
import './GetStartedStyle.css';
import { Why } from '../../sections/Why/Why';
import Divider from '../../components/Divider/Divider';
import es from '../../languages/es.json';
import { BLUE_COLOR } from '../../config';

export const GetStarted = () => {
	return (
		<div className='getstarted__page' style={{ marginTop: 80 }}>
			<Divider
				backgroundColor={BLUE_COLOR}
				paddingY={20}
				fontSize={18}
				text={es.START_TO_USE_HOME}
				textColor='white'
				fontWeight='bold'
			
			/>
			<Why />
		</div>
	);
};
