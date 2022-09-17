import React from 'react'
import {connect} from 'react-redux'
import {buyCake} from '../redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of cakes- {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>buy cake</button>
    </div>
  )
}

//here state is refered to the store state
const mapStateToProps = (state) =>{
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    buyCake: ()=> dispatch(buyCake())
  }
}


//it connects the cakeContainer to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(CakeContainer)