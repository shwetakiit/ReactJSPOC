import  React from 'react'
class Hello extends React.Component {
render() {
    //This is using JSX
   /* return (
       <div> 
            <h1> This is jsx version of hello component</h1>
        </div>
    ) */
     //Write componenet without using jsx component

     return React.createElement('div',
     {id:'hello',className :'helloclass'},


     React.createElement('h1',null/*This is key value pair*/,'This is hello componenet without using jsx'));

    

}
}
export default Hello;