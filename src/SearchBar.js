import React, {Component} from 'react';
import $ from 'jquery';



class SearchBar extends Component {
	constructor(){
		super();
		this.handleChange = this.handleChange.bind(this);
		this.checkCheck = this.checkCheck.bind(this);
	}

	handleChange(event){
		this.props.onChange(event.target.value);
	}
	checkCheck(event){
		this.props.onCheck($('#checkbox').prop('checked'));
	}

	render(){
		// const searchTerm = this.props.searchTerm;

		return(
			<form className="search-bar">
				<input onChange={this.handleChange} id="searchTerm" type="text" placeholder="Search..." />
				<div>
					<input id="checkbox" onChange={this.checkCheck} type="checkbox" />Only show products in stock.
				</div>
			</form>
		)
	}
}

export default SearchBar;