import React, {Component} from 'react';
import products from "./products";




function Category(props){


		
	var productsArray = products.data.map((product, index)=>{
			return(	<div>
						<div className="col-sm-6">{product.name}</div>
						<div className="col-sm-6">{product.price}</div>
					</div>);
			});
	return(

		<tr> 
			<th>{productsArray}</th>
		</tr>
	)
	
}


export default Category;