import React, {Component} from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

class RoomList extends Component{
	render(){
		return(
			<Panel className="roomlist">
				<ListGroup>
					<ListGroupItem key="one">select</ListGroupItem>
					<ListGroupItem key="two">...</ListGroupItem>
					<ListGroupItem key="three">select</ListGroupItem>
				</ListGroup>
			</Panel>
		);
	}
}

export default RoomList;