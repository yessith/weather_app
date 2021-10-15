import { useContext } from 'react';
import { AppContext } from '../../AppContext';

import { Temperature } from '../Temperature';
import { MinMaxTemperature } from '../MinMaxTemperature';

import './CardWeather.css';

export function CardWeather() {
	const { state } = useContext(AppContext);
	const namePlace = state.dataWeather.name;
	const description = state.dataWeather.weather[0].description;

	return (
		<section className='weather__card'>
			<div className='weather__card__title'>
				<h2>{namePlace}</h2>
				<span>Today's Weather: {description} </span>
			</div>
			<div className='weather__card__details'>
				<Temperature />
				<MinMaxTemperature />
			</div>
		</section>
	);
}
