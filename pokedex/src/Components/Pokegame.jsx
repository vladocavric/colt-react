import React, { useState, useEffect } from 'react';
import Pokedex from './Pokedex';

import pokemons from '../assets/pokemons';

const Pokegame = () => {
	const [deckOne, setDeckOne] = useState([]);
	const [deckTwo, setDeckTwo] = useState([]);
    const [firstDeckSum, setFirstDeckSum] = useState(0);
    const [secondDeckSum, setSecondDeckSum] = useState(0);
	

	const sumArr = (array) => {
		return array.reduce(
			(partialSum, a) => partialSum + a.base_experience,
			0
		);
	};

	const dealCards = () => {
		const prepForDeckOne = [];
		const prepForDeckTwo = [];
		for (let index = 0; index < pokemons.length; index++) {
			const randomNo = Math.floor(Math.random() * 10000);
			const element = pokemons[index];
			if (prepForDeckOne.length >= 4 || prepForDeckTwo.length >= 4) {
				if (prepForDeckOne.length >= 4) {
					prepForDeckTwo.push(element);
				} else {
					prepForDeckOne.push(element);
				}
			} else {
				if (randomNo % 2) {
					prepForDeckTwo.push(element);
				} else {
					prepForDeckOne.push(element);
				}
			}
		}
		setFirstDeckSum(sumArr(prepForDeckOne)) ;
		setSecondDeckSum(sumArr(prepForDeckTwo)) ;
		setDeckOne(prepForDeckOne);
		setDeckTwo(prepForDeckTwo);
	};

	useEffect(() => {
		dealCards();
	}, []);

	return (
		<>
			<Pokedex pokemons={deckOne} sum={firstDeckSum} won={firstDeckSum > secondDeckSum} />
			<Pokedex pokemons={deckTwo} sum={secondDeckSum} won={firstDeckSum < secondDeckSum} />
		</>
	);
};

export default Pokegame;
