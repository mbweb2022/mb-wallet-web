

import React from 'react';
import './EasyStyle.css';
import { BLUE_COLOR } from '../../config';
import { Dashed } from '../../globalStyles';


const data = [
	{
		id:1,
		image: 'how.png',
		time: '5 MINUTOS',
		data: 'Aliqua ea est do velit incididunt proident qui minim nisi. Elit cupidatat exercitation ad id proident officia aliquip sit tempor sunt Lorem nostrud irure adipisicing. Anim magna minim laboris aute laboris eu ipsum Lorem laboris incididunt duis officia.'
	},
	{
		id:2,
		image: 'how2.png',
		time: '7 MINUTOS',
		data: 'Aliqua ea est do velit incididunt proident qui minim nisi. Elit cupidatat exercitation ad id proident officia aliquip sit tempor sunt Lorem nostrud irure adipisicing. Anim magna minim laboris aute laboris eu ipsum Lorem laboris incididunt duis officia.'
	},
	{
		id:3,
		image: 'how3.png',
		time: '2 MINUTOS',
		data: 'Aliqua ea est do velit incididunt proident qui minim nisi. Elit cupidatat exercitation ad id proident officia aliquip sit tempor sunt Lorem nostrud irure adipisicing. Anim magna minim laboris aute laboris eu ipsum Lorem laboris incididunt duis officia.'
	},
];

export const Easy = () => {
	return (
		<Dashed>
			<div className='easy__section'>
				<div className='easy__row' style={{ maxWidth: 900 }}>
					<p className='easy__title'>FACIL<br />Y<br /><span style={{ color: BLUE_COLOR }} >RAPIDO</span></p>

					<div className='easy__column'>
						{
							data.map((element) => {
								return <div key={element.id} className='easy__row' style={{ marginBottom: 30 }}>
									<img src={ `/assets/${element.image}` } alt={element.image} style={{ width: 150, height: 130 }} />
									<p className='easy__text'><span>{ element.time }</span>, { element.data }</p>
								</div>;
							})
						}
					</div>
				</div>
			</div>
		</Dashed>
	);
};
