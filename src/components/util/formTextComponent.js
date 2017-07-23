import React, { Component } from 'react';
import {FormControl, HelpBlock, FormGroup, ControlLabel} from 'react-bootstrap';

class formTextComponent extends Component {
	render () {
		const {text, type, input, meta: {dirty, error}, input: {name}} = this.props;

		if(dirty)
			this.touched = true;

		return (
			<FormGroup className="formItem" validationState={((error && this.touched) ? "error" : null)}>
				<ControlLabel>{text}:</ControlLabel>
				<FormControl name={name} type={type} onBlur={input.onBlur} value={input.value} onChange={input.onChange} />
				<HelpBlock>{(error && this.touched) ? error : null}</HelpBlock>
			</FormGroup>
		)
	}
}

export default formTextComponent;