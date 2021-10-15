import { useContext } from 'react';
import { AppContext } from '../../AppContext';

import { MoreDetails } from '../MoreDetails';
import './WeatherDetails.css';

export function WeatherDetails() {
	const { state } = useContext(AppContext);
	const feelsLike = Math.floor(state.dataWeather.main.feels_like);
	const humidity = Math.floor(state.dataWeather.main.humidity);
	const pressure = Math.floor(state.dataWeather.main.pressure);
	const wind = state.dataWeather.wind.speed;

	// Icons
	const windIco = (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='#60d5e9' viewBox='0 0 16 16'>
			<path d='M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z' />
		</svg>
	);
	const feelsLikeIco = (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='#60d5e9' viewBox='0 0 16 16'>
			<path d='M16 7.5a2.5 2.5 0 0 1-1.456 2.272 3.513 3.513 0 0 0-.65-.824 1.5 1.5 0 0 0-.789-2.896.5.5 0 0 1-.627-.421 3 3 0 0 0-5.22-1.625 5.587 5.587 0 0 0-1.276.088 4.002 4.002 0 0 1 7.392.91A2.5 2.5 0 0 1 16 7.5z' />
			<path d='M7 5a4.5 4.5 0 0 1 4.473 4h.027a2.5 2.5 0 0 1 0 5H3a3 3 0 0 1-.247-5.99A4.502 4.502 0 0 1 7 5zm3.5 4.5a3.5 3.5 0 0 0-6.89-.873.5.5 0 0 1-.51.375A2 2 0 1 0 3 13h8.5a1.5 1.5 0 1 0-.376-2.953.5.5 0 0 1-.624-.492V9.5z' />
		</svg>
	);
	const humidityIco = (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='#60d5e9' viewBox='0 0 16 16'>
			<path
				fillRule='evenodd'
				d='M7.21.8C7.69.295 8 0 8 0c.109.363.234.708.371 1.038.812 1.946 2.073 3.35 3.197 4.6C12.878 7.096 14 8.345 14 10a6 6 0 0 1-12 0C2 6.668 5.58 2.517 7.21.8zm.413 1.021A31.25 31.25 0 0 0 5.794 3.99c-.726.95-1.436 2.008-1.96 3.07C3.304 8.133 3 9.138 3 10a5 5 0 0 0 10 0c0-1.201-.796-2.157-2.181-3.7l-.03-.032C9.75 5.11 8.5 3.72 7.623 1.82z'
			/>
			<path
				fillRule='evenodd'
				d='M4.553 7.776c.82-1.641 1.717-2.753 2.093-3.13l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448z'
			/>
		</svg>
	);
	const pressureIco = (
		<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='#60d5e9' viewBox='0 0 16 16'>
			<path d='M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z' />
			<path d='m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z' />
		</svg>
	);

	return (
		<section className='weather__card'>
			<h2>More Details</h2>
			<div className='weather__card__moreDetails'>
				<MoreDetails title={'Feels like'} icon={feelsLikeIco} value={feelsLike} scale='º' />
				<MoreDetails title={'Humidity'} icon={humidityIco} value={humidity} scale='%' />
				<MoreDetails title={'Wind'} icon={windIco} value={wind} scale='kph' />
				<MoreDetails title={'Pressure'} icon={pressureIco} value={pressure} scale='hPa' />
			</div>
		</section>
	);
}
