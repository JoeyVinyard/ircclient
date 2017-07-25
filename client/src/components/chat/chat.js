import React, {Component} from 'react';
import {Col} from 'react-bootstrap';

import ChatWindow from './chatwindow';
import RoomList from './roomlist';
import NewRoomButton from './newroombutton';


class Chat extends Component{
	render(){
		return(
			<div>
				<Col md={2}>
					<RoomList/>
				</Col>
				<Col md={10}>
					<ChatWindow/>
				</Col>
				<Col md={2}>
					<NewRoomButton/>
				</Col>
			</div>
		);
	}
}

export default Chat;