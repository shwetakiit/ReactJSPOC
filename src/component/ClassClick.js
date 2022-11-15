import React, { Component } from 'react';
class ClassClick extends React.Component {
    constructor(props) {
        super(props);

    }

    clickHandler() {
        console.log("button click event triggered in clas component")
    }

    render() {
        return (
            <div>
        <button onClick={this.clickHandler}>Click handler</button>
            </div>
        );
    }
}


export default ClassClick;