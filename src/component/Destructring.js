import React  from "react";

//Destructing props in function Componenet  using function parameter
//Here instead of passing props we are passing parameter of props 
const Destructing =({name,type}) => {

return(
<div>
    <ul><li>Destructure name {name} and destructrng type {type}</li> </ul> 
</div>


)

}

export default Destructing;