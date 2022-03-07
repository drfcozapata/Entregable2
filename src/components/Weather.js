import React, { useState } from 'react';
import useWeather from '../hooks/useWeather';

const Weather = () => {
	const [weather] = useWeather();
	const [isCelcius, setIsCelcius] = useState(true);

	// console.log(weather);

	const tempKelvin = weather.main?.temp;
	const tempCelsius = (tempKelvin - 273.15).toFixed(1);
	const tempFahrenheit = ((tempKelvin * 9) / 5 - 459.67).toFixed(1);

	const toggleTemp = () => {
		setIsCelcius(!isCelcius);
	};

	return (
		<section className="main">
			<div className="App d-flex flex-column justify-content-between">
				<h2>
					<span>
						{weather.name}, {weather.sys?.country}
					</span>
				</h2>
				<div className="d-flex flex-column justify-content-center align-items-center">
					<img
						src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
						alt="Clima"
					/>
					<ul>
						<li>
							<span>Temperatura Ambiente</span>:{' '}
							{isCelcius ? `${tempCelsius} ºC` : `${tempFahrenheit} ºF`}
						</li>
						<li>
							<span>Humedad Relativa</span>: {weather.main?.humidity}%
						</li>
						<li>
							<span>Presión Atmosférica</span>: {weather.main?.pressure} hPa
						</li>
						<li>
							<span>Velocidad del Viento</span>: {weather.wind?.speed} m/s
						</li>
					</ul>
				</div>
				<div>
					<button className="btn btn-outline-success mt-5" onClick={toggleTemp}>
						{isCelcius ? 'Temperatura en ºF' : 'Temperatura en ºC'}
					</button>
				</div>
			</div>
		</section>
	);
};

export default Weather;
