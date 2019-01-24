import React, { Component } from 'react';
import Events_Demo from './Events_Demo' //import a component

class Header extends Component {
    render() {
        return (
            <h2>Header Component</h2>
        );
    }
};

class Footer extends Component {
    render() {
        return (
            <h2>Footer Component</h2>
        );
    }
};

class MyComponent extends Component {
    render() {
        return (
            <div>
                <Header />
                <h2>My Component</h2>
                <Events_Demo/> 
                <Footer />
            </div>

        );
    }
};

export default MyComponent;