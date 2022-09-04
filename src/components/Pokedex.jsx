import React, { useEffect, useState } from 'react';
import PokemonCard from './Pokedex/PokemonCard';
import axios from 'axios';
import { useSelector } from 'react-redux';
import SearchPokemon from './Pokedex/SearchPokemon';
import SelectType from './Pokedex/SelectType';
import './styles/pokedex.css';
import Header from './shared/Header';
import Pagination from './Pagination';

const Pokedex = () => {
	const [pokemons, setPokemons] = useState();
	const [pokeSearch, setPokeSearch] = useState();
	const [optionType, setOptionType] = useState('All');
	// pagination

	const [currentBlock, setCurrentBlock] = useState(1);
	const [page, setPage] = useState(0);

	useEffect(() => {
		if (optionType !== 'All') {
			const URL = `https://pokeapi.co/api/v2/type/${optionType}/`;
			axios
				.get(URL)
				.then((res) => {
					const arr = res.data.pokemon.map((e) => e.pokemon);
					setPokemons({ results: arr });
				})
				.catch((err) => console.log(err));
		} else if (pokeSearch) {
			const url = `https://pokeapi.co/api/v2/pokemon/${pokeSearch}`;

			const obj = {
				results: [{ url }],
			};
			setPokemons(obj);
		} else {
			const URL =
				'https://pokeapi.co/api/v2/pokemon/?limit=9999999999999&offset=0';
			axios
				.get(URL)
				.then((res) => setPokemons(res.data))
				.catch((err) => console.log(err));
		}
	}, [pokeSearch, optionType, page]);

	const nameTrainer = useSelector((state) => state.nameTrainer);

	return (
		<div>
			<Header setPokeSearch={setPokeSearch} />
			<div className='wrappe-pokedex'>
				<div className='pokedex-conteiner'>
					<div className='cards-title'>
						<h2>
							<span>Welcome {nameTrainer}</span> , Catch hen all
						</h2>
						<SearchPokemon
							setPokeSearch={setPokeSearch}
							setOptionType={setOptionType}
						/>
						<SelectType
							optionType={optionType}
							setOptionType={setOptionType}
							setPokeSearch={setPokeSearch}
							setPage={setPage}
							setCurrentBlock={setCurrentBlock}
						/>
					</div>
					<Pagination
						pokemons={pokemons}
						page={page}
						setPage={setPage}
						currentBlock={currentBlock}
						setCurrentBlock={setCurrentBlock}
					/>

					<div className='cards-container'>
						{pokemons?.results
							.slice(page * 18, (page + 1) * 18)
							.map((pokemon) => (
								<PokemonCard key={pokemon.url} url={pokemon.url} />
							))}
					</div>

					<Pagination
						pokemons={pokemons}
						page={page}
						setPage={setPage}
						currentBlock={currentBlock}
						setCurrentBlock={setCurrentBlock}
					/>
				</div>
			</div>
		</div>
	);
};

export default Pokedex;
