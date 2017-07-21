import React, { Component } from 'react';
import {FormControl} from 'react-bootstrap';

class MyTextField extends Component {
	  render () {
	    const { placeholder, type, input} = this.props;

	    return (
		    <FormControl type={type} placeholder={placeholder} value={input.value} onChange={input.onChange} />
		)
	}
}

export default MyTextField;