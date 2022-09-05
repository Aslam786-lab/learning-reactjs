import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: "Hello"
      }
    // here this refers to the class
    //   this.clickHandler = this.clickHandler.bind(this)      
    }

    // clickHandler(){
    //     console.log(this);
    //     this.setState({                         //here this keyword doesnot refer to class that is why we need call this method inside arrow fn or using bind method
    //         message: 'Bye'
    //     })
    // }

    //4th way
    clickHandler = ()=>{
        this.setState({
            message:'Bye'
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.clickHandler}>click</button>              //error here this is not refering to the class instead it is refering to window object */}
        {/* <button onClick={()=>{this.clickHandler()}}>click</button>      //1st works fine this approach is good if we want to pass parameter here this refers to the EventBind class because class is calling the arrow function */}

        {/* <button onClick={this.clickHandler.bind(this)}>click</button>    //2nd works fine here this is refering to the class */}

        {/* <button onClick={this.clickHandler}>click</button>                  //3rd works fine */}
        <button onClick={this.clickHandler}>click</button>                    //4th works fine


      </div>
    )
  }
}

export default EventBind
