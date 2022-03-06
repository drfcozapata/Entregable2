// import axios from 'axios';
import React from 'react';
import './App.css';
import Weather from './components/Weather';

function App() {
	// const [weather, setWeather] = useState({});

	// const success = pos => {
	// 	console.log(pos.coords.latitude);
	// 	const lat = pos.coords.latitude;
	// 	const lon = pos.coords.longitude;
	// 	axios
	// 		.get(
	// 			`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=510f2e14545cc6053d958ff970899633`
	// 		)
	// 		.then(res => console.log(res));
	// };

	// useEffect(() => {
	// 	navigator.geolocation.getCurrentPosition(success);
	// }, []);

	return (
		<div className="App">
			{/* <h1>Api Key OpenWeather</h1>
			<img
				src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`}
				alt=""
			/> */}
			<Weather />
		</div>
	);
}

export default App;
