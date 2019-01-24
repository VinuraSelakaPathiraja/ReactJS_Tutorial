import React, { Component } from 'react';

class Test extends Component {

    render() {
        var name = 'john';   
        name = 'kate'      //can updated
        var name = 'sam';  //can re-declared

        //let & const varible declaration is a ES6 feacture/syntax

        let age = 3;
        age = 5;           //can updated
        ///let age = 7;    //can't re-declared

        const id = 10;  
        //id = 12;         //can't updated
        //const id = 15;   //can't re-declared    

        const title1 = 'Lets learn React !';
        const title2 = 'Another title !';

        const list = [
            'item1',
            'item2',
            'another item'
        ];

        return (
            <div>
                <h1>ReactJS</h1>
                <h2>{title1}</h2>
                <h2>
                    <u>Turnary Operator</u><br />
                    {
                        //putting some logics -Turnary operator
                        true ? title2 : title1

                    }
                </h2>
                <h2>
                    <u>Rendering a list</u><br />
                    {
                        //rendering a list
                        list.map(
                            item => {
                                return (
                                    <div key={item}>{item}</div>
                                );
                            }
                        )
                    }
                </h2>
            </div>
        );
    }
};

export default Test;