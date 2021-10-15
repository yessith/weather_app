import { useContext } from 'react';
import { AppContext } from '../../AppContext';

import './Temperature.css';

export function Temperature() {
	const { state } = useContext(AppContext);
	const temperature = Math.floor(state.dataWeather.main.temp);
	const icon = state.dataWeather.weather[0].icon;
	const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
	const description = state.dataWeather.weather[0].description;

	// <img src={`${urlBase}${icon}.svg`} alt={description} />;

	return (
		<div className='weather__card__item'>
			<div className='weather__card__item--temperature'>
				<span>
					{temperature}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon-celsius'
						width='30'
						height='30'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#ffffff'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<circle cx='6' cy='8' r='2' />
						<path d='M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3' />
					</svg>
				</span>
			</div>
			<div className='weather__card__item--temperature'>
				<img src={url} alt={description} />
			</div>
		</div>
	);
}
