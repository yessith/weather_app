import { useContext } from 'react';
import { AppContext } from '../../AppContext';

import { ForecastItem } from '../ForecastItem';
import './Forecast.css';

export function Forecast() {
	const { forecast } = useContext(AppContext);

	return (
		<section className='forecast__content'>
			<h2>Extend Forecast</h2>
			<ul className='forecast__content__list'>
				{forecast.map((item, index) => (
					<ForecastItem key={index} data={item} />
				))}
			</ul>
		</section>
	);
}
