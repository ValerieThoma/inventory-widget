import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import products from './products';
import SearchBar from './SearchBar';
// import ProductTable from './ProductTable';
// import ProductRow from './ProductRow';
// import ProductCategoryRow from './ProductCategoryRow';
import Table from './Table';





class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: "",
      inStock: ""
    }
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleCheck = this.handleCheck.bind(this);

  }
  handleFilterChange(newValue){
    this.setState({
      searchTerm: newValue
    });
    console.log("my child component ran me");
  }
  handleCheck(newValue){
    this.setState({
      inStock: newValue
    });
  }
  render() {
    const searchTerm = this.state.searchTerm;
    const inStock = this.state.inStock;
    return (
      <div className="App container">
          <SearchBar onChange={this.handleFilterChange} onCheck={this.handleCheck}/>
          <Table searchTerm={searchTerm} inStock={inStock}/>
      </div>
    );
  }
}

export default App;
