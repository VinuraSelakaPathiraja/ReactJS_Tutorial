import React, { Component } from 'react';

class MyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shouldRenderTitle: true
        }

        this.renderTitle = this.renderTitle.bind(this);
    }

    renderTitle(event) {
        //render the elements based on conditional logic
        //if the shouldRenderTitle true it'll render the title, otherwise no title will be rendered
        if (this.state.shouldRenderTitle) {
            return <h1>Title</h1>;
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
                {this.renderTitle()}
            </div>
        );
    }
};

export default MyComponent;