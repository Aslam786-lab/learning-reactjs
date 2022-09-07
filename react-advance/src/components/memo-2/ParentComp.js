import React, { Component } from 'react'
import MemoComp from './MemoComponent2'

export class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'AK'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'A3'
            })
        },2000)
    }

  render() {
    console.log('**********Parent compo********');
    return (
      <div>ParentComp
        <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp