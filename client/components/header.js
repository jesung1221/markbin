import React, {Component} from 'react';
import Accounts from './accounts';
import {Meteor} from 'meteor/meteor';
import {Link, browserHistory} from 'react-router';

class Header extends Component{
	onBinClick(event){
		event.preventDefault();

		Meteor.call('bins.insert',(error,binId)=>{
			browserHistory.push(`/bins/${binId}`);
		});
	}

	render(){
		return(//inside react-router, it's not navigating. it's loading different components
			<nav className = "nav navbar-default">
				<div className = "navbar-header">
					<Link to="/" className = "navbar-brand">Markbin</Link>
				</div>

				<ul className = "nav navbar-nav">
					<li>
						<Accounts />
					</li>
					<li>
						<a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a>
					</li>
				</ul>
			</nav>

			);
	}
}

export default Header;
