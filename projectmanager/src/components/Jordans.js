import React, {Component} from 'react';
import './Jordans.css';

class Jordans extends Component{
	constructor() {
		super();

		this.displayJordans = () => {
			let list = [];
			let images = require.context('../../public/images', false, /\.(png|jpe?g|svg)$/);
			images = images.keys().map(function(image) {
				return image;
			});

			const charsNameList = images.map(x =>
				x.substring(11, x.indexOf('.png'))
			);

			let len = images.length;

			for (let i = 0; i < 10; i++) {
				let random = Math.floor(Math.random() * len);
				list.push(<img key={Math.floor(Math.random() * 9239)} src={'/images/' + images[random]} alt="Jordan" onClick={this.clickHandler} char={charsNameList[random]} />);
			}

			return list;
		};
		this.list = this.displayJordans();
		this.clickHandler = this.clickHandler.bind(this);
	};
	clickHandler = event=>{
		this.list = this.displayJordans();
		this.props.onClick(event);

	}
	render() {
		return this.list
	}
}

export default Jordans;