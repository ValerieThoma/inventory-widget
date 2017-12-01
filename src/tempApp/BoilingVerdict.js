import React from 'react';


function BoilingVerdict(props){
	if(props.temperature >= 100){
		return(
			<p>The water would boil</p>
		)
	}else{
		return(
			<p>The water would NOT boil</p>
		)
	}
}	



export default BoilingVerdict;