import React from 'react';

import styles from './Card.module.scss';

const Card = ({ id, name, type, base_experience }) => {
	return (
		<div className={styles.wrap}>
			<h3>{name}</h3>
			<div className={styles.imgWrap}>
			<img
				src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${
					id < 10 ? `00${id}` : id < 100 ? `0${id}` : id
				}.png`}
				alt={name}
			/>
			</div>
			
			<p>type: {type}</p>
			<p>EXP: {base_experience}</p>
		</div>
	);
};

export default Card;
