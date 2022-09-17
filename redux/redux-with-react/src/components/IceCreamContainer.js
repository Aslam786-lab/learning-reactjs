import React from 'react'
import {connect} from 'react-redux'
import {buyIceCream} from '../redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of icecreams- {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>buy cake</button>
    </div>
  )
}

//here state is refered to the store state
const mapStateToProps = (state) =>{
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    buyIceCream: ()=> dispatch(buyIceCream())
  }
}


//it connects the cakeContainer to store
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(IceCreamContainer)