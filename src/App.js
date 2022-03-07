import React, { Fragment, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Loading from './components/Loading';
import Weather from './components/Weather';

function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	if (loading) {
		return <Loading />;
	} else {
		return (
			<Fragment>
				<Header />
				<Weather />
			</Fragment>
		);
	}
}

export default App;
