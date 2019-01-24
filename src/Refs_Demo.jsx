import React, { Component } from 'react';


class MyComponet1 extends Component {
    constructor(props) {
        super(props);

        this.displayName = this.displayName.bind(this);
    }

    displayName() {
        //refering the input element by its ref name "nameInput"
        var name = this.nameInput.value;
        document.getElementById('displayName').innerHTML = 'Hi '+name;
    }

    render() {
        return (
            <div>
                {
                    //setting a ref name "nameInput" to the input element
                }
                <h2>Name : <input type="text" ref = {nameInput => this.nameInput = nameInput} /></h2>
                <button onClick={this.displayName}>Click</button>
                <h1><span id="displayName"></span></h1>
            </div>
        );
    }
};

export default MyComponet1;