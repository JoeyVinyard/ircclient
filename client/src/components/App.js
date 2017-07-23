import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import Signin from './auth/signin';
import Signup from './auth/signup';
import Nav from './nav/nav';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Route exact path="/signin" component={Signin}/>
        <Route exact path="/signup" component={Signup}/>
      </div>
    );
  }
}

export default App;
