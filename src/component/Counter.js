import React, { Component } from 'react';

class Counter extends Component {
    constructor(props){
        super(props);
        this.state={
           // count : 0
            count : 'helo'
        }

    }
    increment() {
        this.setState({
          //  count :this.state.count+1
          count :'GOOd bye'
        },
        ()=>{
            console.log('call back value',this.state.count)
        }
        )
       /*
       When we click on button count value on UI is more than 1 to count value in console 
       this is because calls to setState () is asynchrnous becoz console.log IS here called before the state is actually set 
       so it print previous value that is zero not 1 
       to handle such a situation need to pass callback function as a second parameter in setState
        */
       console.log("Count is"+this.state.count);
      
    }
    render() {
        return (
            <div>
              <div>Count -{this.state.count}</div>  
              <button onClick={()=>this.increment()}>Increment</button>
            </div>
        );
    }
}

export default Counter;