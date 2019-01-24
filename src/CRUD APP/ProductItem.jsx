import React, { Component } from 'react';

class ProductItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            //define a state property to identify edit mode or normal view mode
            isEdit: false
        }

        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onEditSubmit = this.onEditSubmit.bind(this);
    }

    onEdit() {
        this.setState({ isEdit: true });
    }

    onDelete() {
        const { name, onDelete } = this.props;
        //call to deleteProduct(name)
        onDelete(name);
    }

    onEditSubmit(event) {
        event.preventDefault();
        //call to editProduct(name, price, originalName)
        this.props.onEdit(this.nameInput.value, this.priceInput.value, this.props.name);
        this.setState({ isEdit: false });
    }

    render() {

        const { name, price } = this.props;

        return (
            //for each product create a div
            <div>
                {
                    this.state.isEdit ?
                        (
                            <form onSubmit={this.onEditSubmit}>
                                <input placeholder="Name"
                                    ref={nameInput => this.nameInput = nameInput}
                                    defaultValue={name} />
                                <input placeholder="Price"
                                    ref={priceInput => this.priceInput = priceInput}
                                    defaultValue={price} />
                                <button>Save</button>
                            </form>
                        )
                        :
                        (
                            <div>
                                <span>{name}</span>
                                {' | '}
                                <span>{price}</span>
                                {' | '}
                                <button onClick={this.onEdit}>Edit</button>
                                {' | '}
                                <button onClick={this.onDelete}>Delete</button>
                            </div>
                        )
                }
            </div>
        );
    }
}

export default ProductItem;
