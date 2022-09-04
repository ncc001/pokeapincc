import React from 'react';

const SearchPokemon = ({ setPokeSearch, setOptionType }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setPokeSearch(e.target.searchText.value.trim().toLowerCase());
		setOptionType('All');
		e.target.searchText.value = '';
	};

	return (
		<form className='search-conteiner' onSubmit={handleSubmit}>
			<input
				className='search-input'
				id='searchText'
				type='text'
				placeholder='name of Pokemon'
			/>
			<button className='search-btn'>Search</button>
		</form>
	);
};

export default SearchPokemon;
