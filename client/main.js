import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './components/app';
import BinsMain from './components/bins/bins_main';
import BinsList from './components/bins/bins_list';
import {Bins} from '../imports/collections/bins';

const routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={BinsList} /> //currently routing '/', since no children component, goto IndexRoute
			<Route path="bins/:binId" component={BinsMain} /> // : sets up a params, BinsMain component will take binId as prop params.binId
		</Route>
	</Router>
);

Meteor.startup(()=>{
	ReactDOM.render(routes, document.querySelector(".render-target"));
});
