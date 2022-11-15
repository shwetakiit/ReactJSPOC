import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildComponenet extends Component {
    constructor(props) {
        super(props);

    }

    

    render() {
        //Here child componenet using parent Component method for onClick via props with prop name greedHandler
        //We can pass paramenet in greedHandler and parent can get that parameter 
        //this.props.greedHandler('Shweta');
        //else this.props.greedHandler
        return (
            <div>
<button onClick={()=>this.props.greedHandler('child')}>GreedParent</button>
            </div>
        );
    }
}



export default ChildComponenet;