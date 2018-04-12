import React, {Component} from 'react';
import Score from './Score';
import Jordans from './Jordans';
import '../index.css';

class Characters extends Component{
		state = {
			score: 0,
			bestScore: 0,
			clickedChars: {
				'michael_jordan_1': false,
				'michael_jordan_2': false,
				'michael_jordan_3': false,
				'michael_jordan_4': false,
				'michael_jordan_5': false,
				'michael_jordan_6': false,
				'michael_jordan_7': false,
				'michael_jordan_8': false,
				'michael_jordan_9': false,
				'michael_jordan_10': false,
				'michael_jordan_11': false,
				'michael_jordan_12': false
			}
		};

	constructor(props) {
		super(props);
		this.guessChar = this.guessChar.bind(this);
	}

	guessChar = event =>{
		let char = event.target.getAttribute('char'),score;
		var updatedState = this.state.clickedChars;
		if(this.state.clickedChars[char]){
			score = 0;
			for(let name in updatedState){
				updatedState[name]=false;
			}

		}else{
			score = this.state.score+1;
			score > this.state.bestScore && this.setState({bestScore:  score})
			updatedState[char]=true;
		}

		this.setState({
			clickedChars : updatedState, score: score
		});
	};

	render(){
		return <main className="container center-align">
				<div className="row">
				<div className="col m3">
					<Score score={this.state.score} bScore={this.state.bestScore} />
				</div>
					<div className="col s12 m9">
						<Jordans onClick={this.guessChar} />
					</div>
				</div>
			</main>;
	}
}

export default Characters;