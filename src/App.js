import logo from './logo.svg';
import './App.css';
import React,{ Component} from 'react'
import Greet from './component/Greet'
import Welcome from './component/Welcome';
import Hello from './component/Hello';
import Message from './component/Message';
import Counter from './component/Counter';
import Destructing from './component/Destructring';
import Destructing1 from './component/Destructuring1';
import Destructing2 from './component/Destructuring2';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EeventBind from './component/EeventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import Gereet from './new_component/Gereet';
import Welcome1 from './new_component/Welcome1';
import Propsconcept from './new_component/Propsconcept';
class App extends Component {
render() {
  return (
    <div className="App">
    {/*  <EeventBind/>

      <Greet name="Shweta" heroName="No body">
    
    <p>This is children props</p>
    </Greet>
   <Welcome name="button">
      <Message/>
    <button>Chick here</button>
 
    </Welcome>
    <Hello/>
    <Counter/>
    <Destructing name="Destructuring" type="Destructing in function parameter of Function Componenet"></Destructing>
    <Destructing1 name="Destructuring" type="Destruring in the function body" ></Destructing1>
    <Destructing2 name="Destructuring" type="Destructuring in Class componenet under render()" ></Destructing2>
     <FunctionClick/>
  <ClassClick/> */}
<ParentComponent/>
<Gereet/>
<Welcome1/>
{/*Props concept */}
<Propsconcept name="shweta" location="blr"/>
 </div>
  );
}
 }

export default App;
