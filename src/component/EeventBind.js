import React, { Component } from 'react';

class EeventBind extends Component {
    constructor(props){
        super(props);
        this.state={
             message : 'Hello'
        }
     //Third way to bind event in constructor--Binding in class constructor --this is better than binding in 
     //Render method   
 this.clickHandler=this.clickHandler.bind(this);

    }
    clickHandler() {
        this.setState({
         message :'Good Bye'
        }
     
        )
     
       console.log("Count is"+this.state.count);
      
    }
    render() {
        return (
            <div>
              <div>{this.state.message}</div>  
              <button onClick={this.clickHandler}>EventBinding</button>
            </div>
        );
    }
}

export default EeventBind;