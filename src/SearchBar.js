import React, {Component} from 'react';



class SearchBar extends Component {
	searchHandler(event){
		event.preventDefault();
		var value = document.getElementById('searchTerm').value
		console.log(value);

	} 

	render(){
		return(
			<div>
	            <form onSubmit={this.searchHandler}>
	            <input id="searchTerm" type="text" placeholder=" Search..." />
	            <button className="btn btn-warning">Search</button>
	            </form>
	            <div className="form-check">
	                <label className="form-check-label">
	                <input id="instock" className="form-check-input" type="checkbox" value="" />
	                      <span className="filter"> Only show products in stock</span>
	                </label>
	            </div>
          	</div>
		)
	}
}

export default SearchBar;