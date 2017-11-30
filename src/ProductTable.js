import React, {Component} from 'react';
import products from "./products"
import Items from './Items'
import Category from './Category'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

console.log(products);

class ProductTable extends Component {
	constructor(){
		super();
		this.products = products;
		this.state = {
			productsByCategory: {}
		}
	}
	componentDidMount(){
		this.formatData();
	}
	formatData(){
		var tempProducts = {};
		this.products.data.map((product)=>{
			console.log(product.category);
			if(tempProducts[product.category] === undefined){
				tempProducts[product.category] = [];
			}
			tempProducts[product.category].push(product);  //brackets will evaluate this as a variable
		});
		console.log(tempProducts);
		this.setState({
			productsByCategory: tempProducts
		})

	}	

	render(){

		var rows = [];
		for(var key in this.state.productsByCategory){
			console.log(this.state.productsByCategory[key]);
			rows.push(<ProductCategoryRow key={key} header={key} />);
				
		}
		// var productsArray = products.data.map((product, index)=>{
		// 	return(	<div>
		// 				<div className="col-sm-6">{product.name}</div>
		// 				<div className="col-sm-6">{product.price}</div>
		// 			</div>);
		// 	});
		// var categoryArray = [];
		// products.data.map((products, index)=>{
		// 	categoryArray.push(<Category key={index} department={products.category} />);
		// })

		return(
			<div className="product-table">
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						
					</tbody>
				</table>
			</div>
		)
	}
}

export default ProductTable;