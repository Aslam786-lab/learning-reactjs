//handling multiple states with multiple reducer
//Middleware
const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddlware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//action
const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake(){
    return {
        type: BUY_CAKE,
        info: 'first redux action'
    }
}

function buyIceCream(){
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}


//reducer --> (previousState, action) => newState


const initialCakeState = {
    numOfCakes: 10,
   
}
const initialIceCreamState = {
    
    numOfIceCreams: 20
}

const cakeReducer = (state= initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            numOfCakes: state.numOfCakes -1
        }

        default: return state
    }
}

const iceCreamReducer = (state= initialIceCreamState, action)=>{
    switch(action.type){

        case BUY_ICECREAM: return{
            ...state,
            numOfIceCreams: state.numOfIceCreams -1
        }

        default: return state
    }
}

//combining the reducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

//creating store
const store = createStore(rootReducer,applyMiddlware(logger))
//reading the state from store
console.log('Initial state',store.getState());

//subcrubing the store
// const unsubscribe = store.subscribe(()=> console.log('Update state', store.getState()))
const unsubscribe = store.subscribe(()=> {})

//updating the store for cake
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

//for ice cream
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())


//unsubscribing
unsubscribe()







/*
Initial state { numOfCakes: 10 }
Update state { numOfCakes: 9 }
Update state { numOfCakes: 8 }
Update state { numOfCakes: 7 }
*/