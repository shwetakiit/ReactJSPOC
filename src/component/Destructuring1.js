import React from "react";

const Destructing1 = (props) =>{ 
    const {name,type}=props;
    return (

        <div>
            <ul>
                <li>
                Destructing {name} and type of destructring is {type}
                </li>
            </ul>
      
        </div>


    )


}
export default Destructing1;