import React, {Component} from 'react';
import  {Blaze} from 'meteor/blaze';
import {Template} from 'meteor/templating';
import ReactDOM from 'react-dom';

class Accounts extends Component{
	componentDidMount(){
		console.log("componentDidMount");
		//Render the Blaze accounts form then find the div
		//we just rendered in the 'render' method and place
		//the Blaze accounts form in that div
		this.view = Blaze.render(Template.loginButtons,
			ReactDOM.findDOMNode(this.refs.container));


	}

	componentWillUnmount(){
		console.log("componentWillUnmount");
		//Go find the forms we created and destory them
		//we need to clean up those forms ourselves
		Blaze.remove(this.view);

	}

	render(){
		console.log('render');
		return(
			<div ref="container"></div>
			)
	}
}

export default Accounts;
