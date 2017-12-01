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
			temperature: 32,
			scale: "c"
		}

		this.handleCelciusChange = this.handleCelciusChange.bind(this);
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
	}
	handleCelciusChange(value){
		console.log('someone changed the celcius input' + value);
		this.setState({
			scale: "c",
			temperature: value
		})
	}
	handleFahrenheitChange(value){
		console.log("someone changed the fahrenheit input to" + value);
		this.setState({
			scale: "f",
			temperature: value
		})

	}

	render(){
		// console.log(tryConvert("100", toCelsius));
		// const temperature = this.state.temperature;
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		if(scale === "c"){
			var fTemp = tryConvert(temperature, toFahrenheit)
			var cTemp = temperature;
		}else if(scale === "f"){
			var fTemp = temperature;
			var cTemp = tryConvert(temperature, toCelsius)
		}
		return(
			<div id="dom-element">
				<TemperatureInput scale="f" temperature={fTemp} onChange={this.handleFahrenheitChange}/>
				<TemperatureInput scale="c" temperature={cTemp} onChange={this.handleCelciusChange}/>
				<BoilingVerdict temperature={parseFloat(cTemp)}/>
			</div>	
		)
	}
}

export default TemperatureApp;