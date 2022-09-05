import { Component } from "react";

class Message extends Component{
    constructor(){
        super()
        this.state = {
            message:'Learning state'
        }
    }

    changeMessage(){
        this.setState({
            message:'Button got clicked'
        })
    }

    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>click</button>
            </div>
        )
    }
}

export default Message