import React, { Component } from 'react';

class Header extends Component {
    render() {

        //Getting props and assigning to varibles
        const {id, name, onClick} = this.props;

        return (
            <div>
                <h2><u>Header Component</u></h2>
                <h1>{this.props.id}</h1>
                <h1>{this.props.name}</h1>
                <div onClick={onClick}>Click Me</div>
            </div>
        );
    }
};


class MyComponent extends Component {
 
    onClick() {
        alert('clicked !');
    }

    render() {
        return (
            <div>
                <h2><u>My Component</u></h2>
                {
                    //passing props into a component
                    //can pass values & methods using props
                }
                <Header id="001" name="Sam" onClick={this.onClick}/> 
                <Header name="John" />
            </div>

        );
    }
};

export default MyComponent;