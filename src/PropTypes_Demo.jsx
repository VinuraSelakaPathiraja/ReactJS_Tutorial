import React, { Component } from 'react';
import PropTypes from 'prop-types';

//define Prop Types to props by 'propTypes'[KEYWORD] object
const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.any,
    onClick: PropTypes.func  //not required
};  

//define default values to props by 'defaultProps'[KEYWORD] object
const defaultProps = {
    address: 'Sri Lanka'
}

class Header extends Component {
    render() {
        //Getting props and assigning to varibles
        const {id, name, onClick} = this.props;

        return (
            <div>
                <h2><u>Header Component</u></h2>
                <h1>{this.props.id}</h1>
                <h2>{this.props.name}</h2>
                <h2>{this.props.address}</h2>
                <div onClick={onClick}>Click Me</div>
            </div>
        );
    }
};

Header.propTypes = propTypes; // add prop types to the component
Header.defaultProps = defaultProps;// add the default props to the component

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
                <Header id={1} name="Sam" onClick={this.onClick}/> 
                <Header id={2} name="John" />
            </div>

        );
    }
};

//Updating Props DEMO --> change to the "export default MyComponent2;"
class MyComponent2 extends Component {

    constructor(props) {
        super(props);
        
        //create a state object, state properties & its values
        this.state = {
            id : 'Initial ID',
            name : 'Initial Name',	 
            address: 'Initial Address'
        }

        this.changeStateValues = this.changeStateValues.bind(this);
    }
 
    changeStateValues(){
        this.setState({
            id : 'New ID', 
            name : 'New Name',
            address: 'New Address'
        });
    }

    render() {
        return (
            <div>
                <h2><u>My Component</u></h2>
                <Header id={this.state.id} name={this.state.name} address={this.state.address} onClick={this.changeStateValues}/> 
                <Header id={2} name="John" />
            </div>

        );
    }
};

export default MyComponent;