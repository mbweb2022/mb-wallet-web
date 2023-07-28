

import React, { useState } from 'react';
import './DropdownMenuStyle.css';
import { Link } from 'react-router-dom';

const DropdownMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			className='dropdown-menu__nav'
			onClick={()=>handleToggle()}
		>
			<button
				className='dropdown-menu__button'
			>
        MENU
			</button>
			{isOpen && (
				<ul className="dropdown-menu__list" >
					<Link to='/' className="dropdown-menu__link">
						<li className="dropdown-menu__item">
                INICIO
						</li>
					</Link>
					<Link to='/why' className="dropdown-menu__link">
						<li className="dropdown-menu__item">
                ¿POR QUÉ MONEYBLINKS?
						</li>
					</Link>
					<Link to='/faqs' className="dropdown-menu__link">
						<li className="dropdown-menu__item">
                PREGUNTAS FRECUENTES
						</li>
					</Link>
					<Link to='/tutorials' className="dropdown-menu__link">
						<li className="dropdown-menu__item">
              TUTORIALES
						</li>
					</Link>
					<Link to='/us' className="dropdown-menu__link">
						<li className="dropdown-menu__item">
                NOSOTROS
						</li>
					</Link>
					<Link to='/contact' className="dropdown-menu__link">
						<li className="dropdown-menu__item">
                CONTACTO
						</li>
					</Link>
				</ul>
			)}
		</nav>
	);
};

export default DropdownMenu;
