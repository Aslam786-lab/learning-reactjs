import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    increment(){
        //setState(obj to be changed , callBack function which will executes once obj state has been changed)
        //if we call increment five method on this will not update the count based on the pervious count (ex: will get 5 times 0)
        // this.setState({
        //     count:this.state.count+1
        // },()=> {
        //     return console.log('callback value' + this.state.count);
        // })
        // console.log(this.state.count);

        //If we want to update the count(state) based on previous count(state) we can use function as argument to setState method instead of object
        this.setState(prevState =>({
            count: prevState.count + 1
        }))
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
      <div>
        <h1>Count - {this.state.count}</h1>
        <button onClick={()=>this.incrementFive()}>click</button>
      </div>
    )
  }
}

export default Counter