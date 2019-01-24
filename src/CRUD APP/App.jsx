import React, { Component } from 'react';
import ProductItem from './ProductItem';
import AddProduct from './AddProduct';

//create an array with some initial products
const products = [
    {
        name: 'ipad',
        price: 200
    },
    {
        name: 'iphone',
        price: 650
    }
];

//initiate a localstorage with some initial products
//set products as JSON stringify version of the products array
localStorage.setItem('products', JSON.stringify(products))

class App extends Component {

    constructor(props) {
        super(props);

        //create a state object with a property called products, an empty array
        this.state = {
            products: []
        };

        this.deleteProduct = this.deleteProduct.bind(this);
        this.addProduct = this.addProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentWillMount() {
        //read the products from local storage
        //convert the products into JS version/ proper JS array
        const products = JSON.parse(localStorage.getItem('products'));

        //instead of reading writing local storage all the time, lets use state to
        //set the products got from the local storage to the state
        this.setState({ products: products });
    }

    getProducts() {
        return this.state.products;
    }

    deleteProduct(name) {
        const products = this.getProducts();

        const filteredProducts = products.filter(product => {
            return product.name !== name;// return each product that dont match the name 
            //of the product we want to delete 
        });

        this.setState({ products: filteredProducts });
    }

    addProduct(name, price) {
        const products = this.getProducts();

        //add new product object to the product array
        products.push({
            name,
            price
        });

        this.setState({ products: products });
    }

    editProduct(name, price, originalName) {
        let products = this.getProducts();
        products = products.map(product => {
            //identify the edit product by its original name
            if (product.name === originalName) {
                product.name = name;
                product.price = price;
            }
            return product;
        });
        this.setState({ products });
    }

    render() {
        return (
            <div className="App">
                <h1><u>Product Manager</u></h1>

                <AddProduct
                    onAdd={this.addProduct}
                />

                {
                    //loop & display the list products 
                    this.state.products.map(product => {
                        return (
                            <ProductItem
                                key={product.name}
                                // name={product.name}
                                // price={product.price}
                                {...product}//ES6 spred operator --> pass all elements of product as
                                //props at once
                                onDelete={this.deleteProduct}
                                onEdit={this.editProduct}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default App;
