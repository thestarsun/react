import React from 'react';
import {render} from 'react-dom';
import UserContainer from './containers/UserContainer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';

import './style.css';

const defaultState = {
	users: {},
	page: 1,
	limit: 10
};

const store = createStore(reducer, defaultState);
render(
	<Provider store = {store}>
		<UserContainer />
	</Provider>,
	document.getElementById('root')
);



