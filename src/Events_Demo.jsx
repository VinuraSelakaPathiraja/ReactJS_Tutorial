import React, { Component } from 'react';
import img1 from './imgs/bulb1.png';
import img2 from './imgs/bulb2.png';

class Event_Demo extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
             status : false
        }
 
        //binding methods to the component through the contructor
        this.switchOnOff = this.switchOnOff.bind(this); 
    }

    switchOnOff() {
        this.setState({
            status: ! this.state.status
        });
    }


	render() {
        var imgUrl = this.state.status ? img1 : img2;
        var styleCSS = { 'backgroundColor': 'gray ','height': '100vh'};
		return (
			<div style = {styleCSS}>
                <center>
				<img alt='' src={imgUrl} height={200}/><br/>
                <button onClick={this.switchOnOff}>Click Me</button>
                </center>
			</div>
		);
	}
};

export default Event_Demo;