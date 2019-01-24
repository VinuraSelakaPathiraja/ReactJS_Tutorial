import React, { Component } from 'react';

class Header extends Component {

    //contructor method 
    constructor(props) {
        super(props);
        
        //create a state object, state properties & its values
        this.state = {
            id : '001',
            name : 'John'	 
        }

        this.changeStateValues = this.changeStateValues.bind(this);
    }

    changeStateValues(){
        //change the values of the state properties
        this.setState({
            id : '005', name : 'Sam'
        });
    }
 
    render() {
        //setTimeout(()=>{this.setState({id : '002', name : 'john'})}, 5000);
        return (
            //access the state elements
            <div>
                <h2>Id is : {this.state.id}</h2> 
				<h2>Name is : {this.state.name}</h2> 
                <button onClick={this.changeStateValues}>Click</button>
            </div>
        );
    }
};


class MyComponent extends Component {
    render() {
        return (
            <div>
                <Header/>
            </div>

        );
    }
};

export default MyComponent;