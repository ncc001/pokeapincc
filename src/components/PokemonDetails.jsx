import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StatPokemon from './Pokedex/StatPokemon';
import Header from './shared/Header';
import './Pokedex/style/pokemondetails.css';

const PokemonDetails = () => {
	const [pokeInfo, setPokeInfo] = useState();

	const { name } = useParams();

	useEffect(() => {
		const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`;
		axios
			.get(URL)
			.then((res) => setPokeInfo(res.data))
			.catch((err) => console.log(err));
	}, []);
	console.log(pokeInfo);
	return (
		<header>
			<Header />
			<div className='poked'>
				<article
					className={`pokedex-conteiner cardd color-${pokeInfo?.types[0].type.name}`}
				>
					<header
						className={`card__headerd bg-${pokeInfo?.types[0].type.name}`}
					>
						<img
							className='card__avatard'
							src={pokeInfo?.sprites.other['official-artwork']['front_default']}
							alt=''
						/>
					</header>
					<section className='card__bodyd'>
						<h3
							className={`card__named shadow-border-text color-text-${pokeInfo?.types[0].type.name}`}
						>
							{pokeInfo?.name}
						</h3>
						<div className='card__info-container'>
							<ul className='card__list-typed'>
								<h3 className='card__list__title'> Type</h3>
								{pokeInfo?.types.map((slot) => (
									<li
										className={`card__item-typed  shadow-border-text bg-${pokeInfo?.types[0].type.name}`}
										key={slot.type.url}
									>
										{slot.type.name}
									</li>
								))}
							</ul>
							<ul className='abilities'>
								<h3 className='abilities__title'>Abilitis</h3>
								{pokeInfo?.abilities.map((ability) => (
									<li
										className={`ability shadow-border-text bg-${pokeInfo?.types[0].type.name}`}
										key={ability.ability.name}
									>
										{ability.ability.name}
									</li>
								))}
							</ul>
						</div>
					</section>
					<hr className='card__hrd' />
					<footer className='card__footerd'>
						<ul className='card__list-statsd'>
							{pokeInfo?.stats.map((stat) => (
								<StatPokemon
									key={stat.stat.url}
									infoStat={stat}
									color={pokeInfo?.types[0].type.name}
								/>
							))}
						</ul>
					</footer>
					<hr className='card__hrd' />
					<section>
						<ul className='moves_list'>
							<h3 className='moves__title'>Movements</h3>
							{pokeInfo?.moves.map((move) => (
								<li className='moves' key={move.move.name}>
									{move.move.name}
								</li>
							))}
						</ul>
					</section>
				</article>
			</div>
		</header>
	);
};

export default PokemonDetails;
