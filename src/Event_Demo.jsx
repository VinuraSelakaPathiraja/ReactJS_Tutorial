import React, { Component } from 'react';

class Test extends Component {
    
    onClick() {
        alert('clicked !');
    }

    onChange(event) {
        console.log(event.target.value);//gets the value of the input
    }

    onSubmit(event) {
        event.preventDefault();//prevent the page from refreshing
        alert('submitted !');
    }


    render() {

        const list = [
            'item1',
            'item2',
            'another item'
        ];

        return (
            <div>
                <h2>
                    <u>onClick Event</u><br />
                    {
                        //event handler - onClick
                        //Each child in an array or iterator should have a unique "key" prop
                        list.map(
                            item => {
                                return (
                                    <div key={item} onClick={this.onClick}>{item}</div>
                                );
                            }
                        )
                    }
                </h2>
                <h2>
                    <u>onChange Event</u><br />
                    <input onChange={this.onChange} />
                </h2> 
                <h2>
                    <u>onSubmit Event</u><br />
                    <form onSubmit={this.onSubmit}>
                    <input/>
                    </form>    
                </h2>
                
            </div>
        );
    }
};

export default Test;