
import React, { Component } from 'react';
import products from './products';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

class ProductTable extends Component{
	constructor(){
		super();
		this.safeProductData = {...products};
		this.products = products;
		this.state = {
			productsByCategory: {}
		}
	}

	componentWillMount(){
		this.formatData();
	}

	componentWillReceiveProps(newProps){
		console.log(newProps);

		const searchTerm = newProps.searchTerm.toLowerCase();
		var tempProducts =[];
		this.safeProductData.data.map((item)=>{
			const itemName = item.name.toLowerCase();
			if(itemName.indexOf(searchTerm) != -1){
				tempProducts.push(item);
			}
		});
		this.products.data = tempProducts;
		this.formatData();

	}

	formatData(){
		var tempProducts = {};
		this.products.data.map((product)=>{
			// console.log(product.category);
			if(tempProducts[product.category] === undefined){
				tempProducts[product.category] = [];
			}
			tempProducts[product.category].push(product);
		});
		console.log(tempProducts);
		this.setState({
			productsByCategory: tempProducts
		})
	}

	render(){
		
		var rows = [];
		// Outter for loop, is going through the categories.
		// I.e, "Sporting Goods", and "Electronics"
		// It will run as many times as there are categories
		for(var key in this.state.productsByCategory){
			// console.log(key1);
			console.log(this.state.productsByCategory[key]);
			rows.push(<ProductCategoryRow key={key} header={key} />);
			// Internal map through THIS category.
			this.state.productsByCategory[key].map((item,index)=>{
				rows.push(<ProductRow key={item.name} item={item} />)
			});
		};
		return (
			<div className="product-table">
				<table className="table table-bordered table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
					{rows}
					</tbody>
				</table>
			</div>
		);
	};
};

export default ProductTable;