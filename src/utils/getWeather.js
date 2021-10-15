import { fetchData } from './fetchData';

export async function getWeather(lat, lon) {
	if (!lat && !lon) return null;

	const URL_BASE = 'https://api.openweathermap.org/data/2.5/';
	const API_02 = process.env.REACT_APP_API_KEY2;
	const API_01 = process.env.REACT_APP_API_KEY;

	const URL_WEATHER = `${URL_BASE}weather?lat=${lat}&lon=${lon}&appid=${API_01}&units=metric`;
	const URL_FORECAST = `${URL_BASE}forecast/daily?lat=${lat}&lon=${lon}&appid=${API_02}&units=metric`;

	const responseWeather = await fetchData(URL_WEATHER);
	const responseForecast = await fetchData(URL_FORECAST);

	const [dataWeather, dataForecast] = await Promise.all([responseWeather, responseForecast]);

	return [dataWeather, dataForecast];
}
