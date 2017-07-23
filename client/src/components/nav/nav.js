import React, {Component} from 'react';
import {Nav, Navbar, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';
import { connect } from 'react-redux';

class ircNav extends Component {

	getAuthButtons(){
		if(!this.props.authenticated){
			return(
				[
					<NavItem eventKey={1} key={1} href="/signin">Sign In</NavItem>,
					<NavItem eventKey={2} key={2} href="/signup">Sign Up</NavItem>
				]
			)
		}else{
			return(
				<NavItem eventKey={3} key={3} href="/signout">Sign Out</NavItem>
			)
		}
	}

	render() {
		return (
			<div>
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							<a href="./">React-IRC</a>
						</Navbar.Brand>
					</Navbar.Header>
					<Nav>
						{this.getAuthButtons()}
						<NavDropdown eventKey={4} key={4} title="Dropdown" id="basic-nav-dropdown">
							<MenuItem eventKey={5} key={5}>Action</MenuItem>
							<MenuItem eventKey={6} key={6}>Another action</MenuItem>
							<MenuItem eventKey={7} key={7}>Something else here</MenuItem>
							<MenuItem divider />
							<MenuItem eventKey={8} key={8}>Separated link</MenuItem>
						</NavDropdown>
					</Nav>
				</Navbar>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		authenticated: state.authenticated
	};
}

export default connect(mapStateToProps)(ircNav);