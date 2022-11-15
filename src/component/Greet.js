import React from 'react'
/*function Greet() {

return <h1>Hello shweta</h1>

} */

//We can write above function using lambda expression
//Destructing props in function Componenet  using function parameter
//const  Greet = (props) => {
    //below is destructring
const  Greet = (props) => {
    /* Props are immutable value of props can't be change lets try with 
     Greet.js:11 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'
    */
   // props.name='Ragini';

    console.log(props);
   return  (
       <div>
        <h1>Good Morning ! {props.name}</h1>
         {props.children}
       </div>
   
   )
}

//Using stateful componenet that is class componenet

/* class Greet extends React.Component {
    constructor(props) {
        super(props);
        this.name=this.props.name;

    }
    render() {
        console.log(this.props);
        return (
            
        <div>
       <h1> Good Morning ! {this.name} </h1> 
        </div>
           
        )
    }

}
*/



export default Greet;