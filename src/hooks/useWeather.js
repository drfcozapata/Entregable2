import axios from 'axios';
import { useEffect, useState } from 'react';

const useWeather = () => {
	const [weather, setWeather] = useState({});

	const success = pos => {
		const lat = pos.coords.latitude;
		const lon = pos.coords.longitude;
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&appid=510f2e14545cc6053d958ff970899633`
			)
			.then(res => setWeather(res.data));
	};

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success);
	}, []);

	return [weather];
};

export default useWeather;
