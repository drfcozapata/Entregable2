// import axios from 'axios';
import React, { Fragment } from 'react';
import './App.css';
import Weather from './components/Weather';
import Header from './components/Header';

function App() {
	return (
		<Fragment>
			<Header />
			<Weather />
		</Fragment>
	);
}

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
export default App;
