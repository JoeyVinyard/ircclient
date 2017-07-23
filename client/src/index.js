import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'

import './index.css';
import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, applyMiddleware(thunk));

console.log(store)

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Route path="/" component={App}/>
		</BrowserRouter>
	</Provider>
, document.getElementById('root'));

registerServiceWorker();