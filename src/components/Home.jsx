import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNameTrainer } from '../store/slices/nameTrainer.slice';
import Footer from './shared/Footer';
import Header from './shared/Header';
import './styles/home.css';

const Home = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const inputValue = e.target.name.value.trim();
		if (inputValue.length !== 0) {
			dispatch(setNameTrainer(inputValue));
			navigate('/pokedex');
		}
		e.target.name.value = '';
	};

	return (
		<div className='home__conteiner'>
			<img className='home-img' src='/images/pokedex.png' alt='Pokedex Logo' />

			<p className='home-text'>To star Give me your Trainer Name</p>
			<form className='home-form' onSubmit={handleSubmit}>
				<input
					className='home-input'
					type='text'
					id='name'
					placeholder='ENTER YOUR NANE'
				/>
				<button className='homte-btn'>gotta catch'em all</button>
			</form>
			<Footer />
		</div>
	);
};

export default Home;
