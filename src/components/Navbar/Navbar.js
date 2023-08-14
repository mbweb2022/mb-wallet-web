import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu/DropdownMenu.js';
import './NavbarStyle.css';

const Navbar = () => {
	return (
		<nav
			className='navbar__nav'
		>	<Link to='/'>
				<img 
					alt='logo aplicación'
					src='/assets/logo.svg'
					height="80px"
					width="100%"
					className='navbar__img'
				/>
			</Link>
			
			<DropdownMenu />
		</nav>
		
	);
};

export default Navbar;
