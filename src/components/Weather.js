import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Weather = () => {
	const [weatherPZO, setWeatherPZO] = useState({});
	const [isCelcius, setIsCelcius] = useState(true);

	const success = pos => {
		const lat = pos.coords.latitude;
		const lon = pos.coords.longitude;
		axios
			.get(
				`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&appid=510f2e14545cc6053d958ff970899633`
			)
			.then(res => setWeatherPZO(res.data));
	};
	console.log(weatherPZO);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(success);
	}, []);

	const tempKelvin = weatherPZO.main?.temp;
	const tempCelsius = (tempKelvin - 273.15).toFixed(1);
	const tempFahrenheit = ((tempKelvin * 9) / 5 - 459.67).toFixed(1);
	console.log(tempKelvin, tempCelsius, tempFahrenheit);

	const toggleTemp = () => {
		setIsCelcius(!isCelcius);
	};

	return (
		<div className="main">
			<div className="App d-flex flex-column justify-content-between">
				<h2>
					<span>
						{weatherPZO.name}, {weatherPZO.sys?.country}
					</span>
				</h2>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<img
						src={`http://openweathermap.org/img/wn/${weatherPZO.weather?.[0].icon}@2x.png`}
						alt="Clima"
					/>
					<ul>
						<li>
							<span>Temperatura Ambiente</span>:{' '}
							{isCelcius ? `${tempCelsius} ºC` : `${tempFahrenheit} ºF`}
						</li>
						<li>
							<span>Humedad Relativa</span>: {weatherPZO.main?.humidity}%
						</li>
						<li>
							<span>Presión Atmosférica</span>: {weatherPZO.main?.pressure} hPa
						</li>
						<li>
							<span>Velocidad del Viento</span>: {weatherPZO.wind?.speed} m/s
						</li>
					</ul>
				</div>
				<div>
					<button className="btn btn-outline-success mt-5" onClick={toggleTemp}>
						{isCelcius ? 'Temperatura en ºF' : 'Temperatura en ºC'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Weather;
