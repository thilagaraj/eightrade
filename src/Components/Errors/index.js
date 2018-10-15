import React from 'react';
import PropTypes from 'prop-types';

const Errors=(props)=>{
	return (		
		props.messages.map((error)=>
			<div class="alert alert-danger fade show" role="alert">
				{error}
			</div>
		)
	);	
}

Errors.propTypes={
	messages:PropTypes.array.isRequired	
}

export default Errors;