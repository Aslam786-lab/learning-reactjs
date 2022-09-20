import React from 'react'
import { connect } from 'react-redux'
import {buyCake, buyIceCream} from '../redux'


function ChooseState(props) {
  return (
    <div>
        <h2>Item - {props.item}</h2>
        <button onClick={props.buyItem}>buy Item </button>
    </div>
  )
}

const mapStateToProps = (state, propsFromApp) => {
    
    const itemState = propsFromApp.cake
    ? state.cake.numOfCakes 
    : state.iceCream.numOfIceCreams

    return {
        item: itemState
    }

}

const mapDispatchToProps = (dispatch, propsFromApp) => {
    const dispatchFunction = propsFromApp.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

    return {
        buyItem: dispatchFunction
    }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseState)