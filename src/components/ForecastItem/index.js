import './ForecastItem.css';

export function ForecastItem({ data }) {
	const day = data.day;
	const tempMin = Math.floor(data.tempMin);
	const tempMax = Math.floor(data.tempMax);
	const icon = data.icon;
	const url = `https://openweathermap.org/img/wn/${icon}@2x.png`;
	const description = data.description;

	return (
		<li className='forecast__content__list__item'>
			<h3>{day}</h3>
			<img src={url} alt={description} />
			<div className='forecast__content__list__item--content'>
				<span>
					<svg width='15' height='15' viewBox='0 0 16 21' fill='#60d5e9'>
						<path d='M20,15H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V15H4l8,8,8-8Z' transform='translate(-4 -2)'></path>
					</svg>
					{tempMin}º
				</span>
				<span>/</span>
				<span>
					<svg width='15' height='15' viewBox='0 0 16 21' fill='#f5291b'>
						<path d='M20,15H15V3a1,1,0,0,0-1-1H10A1,1,0,0,0,9,3V15H4l8,8,8-8Z' transform='translate(20 23) rotate(180)'></path>
					</svg>
					{tempMax}º
				</span>
			</div>
		</li>
	);
}
