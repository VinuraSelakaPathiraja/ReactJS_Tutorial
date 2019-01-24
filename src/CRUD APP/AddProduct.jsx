import React, { Component } from 'react';

class AddProduct extends Component {

    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(event) {
        //prevent the page from refreshing
        event.preventDefault(); 

        //call to AddProduct(name, price) 
        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        //clear the input fields
        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h2>Add Product</h2>
                <input placeholder="Name" ref={nameInput => this.nameInput=nameInput}/>
                <input placeholder="Price" ref={priceInput => this.priceInput=priceInput}/>
                <button>Add</button>
                <hr />
            </form>
        );
    }
}

export default AddProduct;
