import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class NewRoomButton extends Component{
	render(){
		return(
			<Button  className="newroombutton">
				New Room
			</Button>
		);			
	}
}

export default NewRoomButton;