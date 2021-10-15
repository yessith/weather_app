import { useState, useRef, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

import { initialState } from '../initialState';
import { BingProvider } from 'leaflet-geosearch';
import { getWeather } from '../utils/getWeather';
import { getNextSevenDays } from '../utils/getNextSevenDays';

export function useInitialState() {
	const [state, setState] = useState(initialState);
	const [suggestion, setSuggestion] = useState([]);
	const [forecast, setForecast] = useState([]);
	const [loading, setLoading] = useState(false);
	const [render, setRender] = useState(false);
	const [query, setQuery] = useState('');

	const inputRef = useRef();
	const getValueInput = () => {
		const inputVal = inputRef.current.value;
		setQuery(inputVal);
	};

	useEffect(() => {
		const getSuggestion = async () => {
			const list = [];

			const provider = new BingProvider({
				params: {
					key: 'AtSqjf6fts-3DqnM2k9-SsSOKPTu8TxO39d60sw10GOHC_1JRj8AC2OPeGSh3H5F',
				},
			});

			const results = await provider.search({ query }).then((value) => value);
			results.forEach((element) => list.push({ id: uuid(), element }));

			setSuggestion(list);
		};

		getSuggestion();
	}, [query]);

	const getForecast = () => {
		const next7Days = getNextSevenDays();
		const dataForecast = state.dataForecast;
		const list = [];

		dataForecast.list.forEach((item, index) => {
			list.push({
				day: next7Days[index],
				tempMin: item.temp.min,
				tempMax: item.temp.max,
				icon: item.weather[0].icon,
				description: item.weather[0].description,
			});
		});

		setForecast(list);
	};

	const ShowWeather = async (lat, lon) => {
		const result = getWeather(lat, lon);

		result.then((value) => {
			const dataWeather = value[0];
			const dataForecast = value[1];
			// setState({ dataWeather, dataForecast });
			setState({ dataWeather: (state.dataWeather = dataWeather), dataForecast: (state.dataForecast = dataForecast) });
			setLoading(false);
			setRender(true);
			getForecast();
		});

		inputRef.current.value = '';
	};

	const gettCoordinates = (event) => {
		setLoading(true);
		const dataKey = event.target.getAttribute('data-key');
		const place = suggestion.find((place) => place.id === dataKey);
		const namePlace = place.element.label;
		inputRef.current.value = namePlace;
		setSuggestion([]);

		const lat = place.element.raw.geocodePoints[0].coordinates[0];
		const lon = place.element.raw.geocodePoints[0].coordinates[1];
		ShowWeather(lat, lon);
	};

	return { state, setState, inputRef, loading, forecast, render, suggestion, getValueInput, gettCoordinates, ShowWeather };
}
