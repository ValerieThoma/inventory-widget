import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';


function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

class TemperatureApp extends Component{
	constructor(){
		super();
		this.state = {
			temperature: ""
		}

		this.handleCelciusChange = this.handleCelciusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}
	handleCelciusChange(value){
		console.log('someone changed the celcius input' + value);
	}
	handleFahrenheitChange(value){
		console.log("someone changed the fahrenheit input to" + value);
	}

	render(){
		// console.log(tryConvert("100", toCelsius));
		// const temperature = this.state.temperature;
		return(
			<div>
				<TemperatureInput scale="f" onChange={this.handleFahrenheitChange}/>
				<TemperatureInput scale="c" onChange={this.handleCelciusChange}/>
			</div>	
		)
	}
}

export default TemperatureApp;