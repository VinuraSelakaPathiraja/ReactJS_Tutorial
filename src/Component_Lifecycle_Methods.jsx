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

    constructor(props) {
        super(props);
    
        this.state = {
            id : 0,
            name : 'Initial Name',	 
            address: 'Initial Address'
        }

        this.changeStateValues = this.changeStateValues.bind(this);
    }
 
    changeStateValues(){
        this.setState({
            id : 9, 
            name : 'New Name',
            address: 'New Address'
        });
    }

    componentWillMount() {
        //run before the component mounts
        //good place to make some AJAX requests, so that you can get the data before the component mounts
        console.log('WILL MOUNT');
    }

    componentDidMount() {
        //run after the component mounts
        //good place to focus a filed after the component loads
        console.log('DID MOUNT');
    }

    componentWillUpdate(nextProps, nextState) {
        //run before the component updates by props or state
        console.log('WILL UPDATE : '+this.props, this.state, nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        //run after the component updates by props or state
        console.log('DID UPDATE : '+this.props, this.state, prevProps, prevState);
    }

    shouldComponentUpdate(nextProps, nextState){
        //run before the component updates by props or state
        //can decide whether the component should update or not
        return false;
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