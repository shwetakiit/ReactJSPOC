
import React from "react";
class Destructing2 extends React.Component {

    render() {
        const {name,type} =this.props;
        return(
            <div>
            <ul>
                <li>
                Destructing {name} and type of destructring is {type}
                </li>
            </ul>
      
        </div>
        )
    }
}
export default Destructing2;