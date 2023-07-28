
import React from 'react';
import './WhatsStyles.css';
import { Dashed } from '../../globalStyles';
import { BLUE_COLOR } from '../../config';

export const Whats = () => {
	return (
		<Dashed className='whats__section'>
			<p className='whats__title'>QUE ESTA PASANDO<br /> <span style={{marginLeft: 30}}>EN</span><span style={{ color: BLUE_COLOR }} > MONEYBLINKS</span></p>

			<div className='whats__row'>
				<div className='grid-item__whats'>
					<img src='/assets/1.png' alt='heart' height='auto' width='100%' />
					<p className='whats__text_card' ><span style={{color: BLUE_COLOR}} >Officia sunt duis esse nulla.</span> Incididunt enim laborum non Lorem. Veniam occaecat proident minim ex pariatur esse consectetur incididunt non sunt nulla. Voluptate sunt sunt officia ipsum. Ut sint proident esse anim do eiusmod tempor. Aute id qui aliquip incididunt culpa quis. Laboris fugiat anim commodo ad enim exercitation tempor aliquip culpa ut duis.</p>
				</div>
				<div className='grid-item__whats'>
					<img src='/assets/2.png' alt='heart' height='auto' width='100%' />
					<p className='whats__text_card' ><span style={{color: BLUE_COLOR}} >Officia sunt duis esse nulla.</span> Incididunt enim laborum non Lorem. Veniam occaecat proident minim ex pariatur esse consectetur incididunt non sunt nulla. Voluptate sunt sunt officia ipsum. Ut sint proident esse anim do eiusmod tempor. Aute id qui aliquip incididunt culpa quis. Laboris fugiat anim commodo ad enim exercitation tempor aliquip culpa ut duis.</p>
				</div>
			</div>
			<div className='whats__row'>
				<div className='grid-item__whats'>
					<img src='/assets/3.png' alt='heart' height='auto' width='100%' />
					<p className='whats__text_card' ><span style={{color: BLUE_COLOR}} >Officia sunt duis esse nulla.</span> Incididunt enim laborum non Lorem. Veniam occaecat proident minim ex pariatur esse consectetur incididunt non sunt nulla. Voluptate sunt sunt officia ipsum. Ut sint proident esse anim do eiusmod tempor. Aute id qui aliquip incididunt culpa quis. Laboris fugiat anim commodo ad enim exercitation tempor aliquip culpa ut duis.</p>
				</div>
				<div className='grid-item__whats'>
					<img src='/assets/4.png' alt='heart' height='auto' width='100%' />
					<p className='whats__text_card' ><span style={{color: BLUE_COLOR}} >Officia sunt duis esse nulla.</span> Incididunt enim laborum non Lorem. Veniam occaecat proident minim ex pariatur esse consectetur incididunt non sunt nulla. Voluptate sunt sunt officia ipsum. Ut sint proident esse anim do eiusmod tempor. Aute id qui aliquip incididunt culpa quis. Laboris fugiat anim commodo ad enim exercitation tempor aliquip culpa ut duis.</p>
				</div>
			</div>
		</Dashed>
	);
};
