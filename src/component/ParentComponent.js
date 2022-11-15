import React, { Component } from 'react';
import ChildComponenet from './ChildComponenet';
class ParentComponent extends Component {
    constructor(props) {
        super(props);
        this.state={parentName:'Parent' }
        this.greedParent= this.greedParent.bind(this);

    }

 greedParent(childName){
   //  alert(`Hello ${this.state.parentName}`)
   alert(`Hello ${childName}`)
 }
    render() {
        //here we are passibg the method of parent in Child componenet as props 
        return (
            <div>
<ChildComponenet greedHandler={this.greedParent}/>
            </div>
        );
    }
}


export default ParentComponent;