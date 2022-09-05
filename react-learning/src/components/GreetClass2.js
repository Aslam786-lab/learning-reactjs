import { Component } from "react";

class Welcome extends Component{
    
    render(){
        const {name, place} = this.props
        return <h1>Hello {name} from {place}</h1>
    }
}

export default Welcome