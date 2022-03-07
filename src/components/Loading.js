import React from 'react';
import '../css/Loading.css';

const Loading = () => {
	return (
		<div className="loadingFather">
			<div class="loadingSon">
				<div class="lds-grid">
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Loading;
