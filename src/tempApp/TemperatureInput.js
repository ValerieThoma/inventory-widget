import React, { Component } from 'react';


class TemperatureInput extends Component{
	constructor(props){
		super(props);
		this.state ={
			temperature: ""
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event){
		this.props.onChange(event.target.value);
	}
	render(){
		const temperature = this.props.temperature;
		const scale = this.props.scale;
		return(
			<div className="input">
				<legend>{this.props.scale}</legend>
				<input value={temperature} onChange={this.handleChange}/>
			</div>	
		)
	}

}

export default TemperatureInput;