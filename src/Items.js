import React, {Component} from 'react';
import products from "./products";



function Items(props){
	if(props.item.inStock === true){
		var stockColor = "text-success"
	}else{
		var stockColor = "text-danger"
	}
	return(
		<tr>
			<td className={stockColor}>{props.item.name}</td>
			<td>{props.item.price}</td>
		</tr>
	)
}

export default Items;