import React from 'react';
import Card from './Card';

import styles from './Pokedex.module.scss';

const Pokedex = ({pokemons, sum, won}) => {
    
	return (
		<>
		{won && <h2 style={{color: 'green'}}>wining hand</h2>}
		{!won && <h2 style={{color: 'red'}}>lusting hand</h2>}
		<p>total experience: {sum}</p>
		<div className={styles.wrapper}>
			{pokemons.map((pokemon) => (
				<Card key={pokemon.id} {...pokemon}/>
			))}
		</div>
		</>
	);
};

export default Pokedex;
