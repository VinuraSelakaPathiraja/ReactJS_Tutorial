import React, { Component } from 'react';

class MyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'John',
            checked: true
        }

        this.updateName = this.updateName.bind(this);
        this.updateCheckBox = this.updateCheckBox.bind(this);
    }

    updateName(event) {
        this.setState({
            name: event.target.value
        }); 
    }

    updateCheckBox() {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <div>
                {
                    //uncontrolled inputs -> can edit it and its basically free whatever you type in
                }
                <input type="text" defaultValue="name" />
                <br />
                {
                    //controlled inputs -> inputs that control every aspect of the value and what happen with it
                }
                <input type="text" value={this.state.name} onChange={this.updateName} />
                <br />
                <input type="checkbox" onChange={this.updateCheckBox} checked={this.state.checked}/>age below 18

            </div>
        );
    }
};

export default MyComponent;