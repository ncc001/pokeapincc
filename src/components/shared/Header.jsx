import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/header.css';
const Header = () => {
	return (
		<article className='header-conteiner'>
			<div className='header-img'>
				<NavLink to='/pokedex'>
					<img className='header-pokemon' src='images\pokedex.png' alt='' />
				</NavLink>
				<img className='header-pokebol' src='images\ultraball.jpg' alt='' />
			</div>
		</article>
	);
};

export default Header;
