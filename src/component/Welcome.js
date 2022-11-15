import React,{Component} from 'react'
class Welcome extends Component {
    constructor(props){
        super(props);

    }
 
render() {
    return (
        <div>
    <h1> Class component</h1>
    {this.props.children}
        </div>
    
    )
}
}

export default Welcome