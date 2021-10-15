import { useContext } from 'react';
import { AppContext } from '../../AppContext';
import { CardWeather } from '../../components/CardWeather';
import { WeatherDetails } from '../../components/WeatherDetails';
import { Forecast } from '../../components/Forecast';

import { Loading } from '../../components/Loading';

import './Main.css';

export function Main() {
	const { loading, render } = useContext(AppContext);
	if (loading) return <Loading />;
	if (!render) return null;

	return (
		<main className='weather'>
			<CardWeather />
			<WeatherDetails />
			<Forecast />
		</main>
	);
}
