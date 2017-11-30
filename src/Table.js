import React, {Component} from 'react';
import products from "./products"
import Items from './Items'
import Category from './Category'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';



class Table extends Component {

	render(){


		var productsArray = products.data.map((product, index)=>{
			return(	<div>
						<div className="col-sm-6">{product.name}</div>
						<div className="col-sm-6">{product.price}</div>
					</div>);
			});
		var categoryArray = [];
		products.data.map((products, index)=>{
			categoryArray.push(<Category key={index} department={products.category} />);
		})

		return(
			<div>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
						{categoryArray}
						
					</tbody>
				</table>
			</div>
		)
	}
}

export default Table;