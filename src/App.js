import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import products from './products';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';




class App extends Component {
  // constructor(props){
  //   super(props)
  //   this.products = props.products
  //   console.log(props.products);
  // }

  render() {
    return (
      <div className="App container">
          <SearchBar/>
          <ProductTable />
      </div>
    );
  }
}

export default App;
