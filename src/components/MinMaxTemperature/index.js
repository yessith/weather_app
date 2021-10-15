import { useContext } from 'react';
import { AppContext } from '../../AppContext';

import './MinMaxTemperature.css';

export function MinMaxTemperature() {
	const { state } = useContext(AppContext);
	const temp_min = Math.floor(state.dataWeather.main.temp_min);
	const temp_max = Math.floor(state.dataWeather.main.temp_max);

	return (
		<div className='weather__card__item'>
			<div className='weather__card__item__minmaxTemp'>
				<div className='weather__card__item__minmaxTemp--details'>
					<div>
						<span>{temp_min} </span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='17'
							height='17'
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
					</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-temperature-minus'
						width='25'
						height='25'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#60d5e9'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5' />
						<line x1='8' y1='9' x2='12' y2='9' />
						<line x1='16' y1='9' x2='22' y2='9' />
					</svg>
				</div>
			</div>
			<div className='weather__card__item__minmaxTemp'>
				<div className='weather__card__item__minmaxTemp--details'>
					<div>
						<span>{temp_max} </span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='17'
							height='17'
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
					</div>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='icon icon-tabler icon-tabler-temperature-plus'
						width='25'
						height='25'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='#f5291b'
						fill='none'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<path stroke='none' d='M0 0h24v24H0z' fill='none' />
						<path d='M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5' />
						<line x1='8' y1='9' x2='12' y2='9' />
						<line x1='16' y1='9' x2='22' y2='9' />
						<line x1='19' y1='6' x2='19' y2='12' />
					</svg>
				</div>
			</div>
		</div>
	);
}
