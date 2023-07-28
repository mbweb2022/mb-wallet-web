import React from 'react';
import FloatingButton from './Terms/TermsPage';
import { GREY_COLOR } from '../config';

export const LicenciasPage = () => {
	return (
		<div className='terms-page__section' >
			<div>
				<p className='terms-page__title'>LICENCIAS</p>
				<p style={{ color: GREY_COLOR, fontFamily: 'Helvetica, sans-serif', fontWeight: 300 }}>
                STATE OF NEW JERSEY - DEPARTMENT OF BANKING AND INSURANCE
					<br />
                LICENCING SERVICES BUREAU - BANKING
					<br />
                MONEYBLINKS INC - LICENSE REF # 2104732 C21
					<br />
                AUGUST 24, 2021
					<br /><br />
                NATIONAL DIRECTOR OF OPERATIONAL RISK MANAGEMENT
					<br />
                CENTRAL BANK OF ECUADOR OVERSIGHT AND SUPERVISION
					<br />
                OF THE ADMINISTRATORS OF THE AUXILIARY PAYMENT SYSTEMS
					<br />
                RESOLUTION # BCE-GG-007-2022
					<br />
                MARCH 25, 2022
				</p>
			</div>
			<FloatingButton />
    
		</div>
	);
};
