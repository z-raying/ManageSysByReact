import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

export default class Game extends React.Component {
	render(){
		//const lines = Array(9).fill(1);
		const lines = [1,2,3,4,5,6,7,8,9];
			const moves = lines.map((step,move) => {
			  	const desc = lines[step - 1];
		      	return (
		        	<li key={move}>
		          		{desc}
		         	</li>
		      	);
		    });

		return(
			<div className="game">
				<ol>{moves}</ol>
			</div>
		);
	}
}