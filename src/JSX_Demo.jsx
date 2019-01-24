import React, { Component } from 'react';

class Regular_Use extends Component {
	render() {
		return (
				<h2>Hello World !</h2>
		);
	}
};

class Nested_Elements extends Component {
	render() {
		return (
			<div>
				<h1><u>ReactJS</u></h1>
				<h2>Hello World !</h2>
				<p>Lets learn React</p>
			</div>
		);
	}
};

class Specifying_Attributes extends Component {
    render() {
        var style1 = { color: 'blue' }
        var style2 = { color: 'green' }

        return (
            <div style={style1}>
                <h1 style={style2}><u>ReactJS</u></h1>
                <h2>Hello World !</h2>
                <p>Lets learn React</p>
            </div>
        );
    }
};

class Embedding_Javascript extends Component {
    render() {
        return (
            <h2>1 + 4 Sum is = {1 + 4}</h2>
        );
    }
};

export default Embedding_Javascript;