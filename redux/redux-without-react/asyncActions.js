const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')


const initialState = {
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

const fetchUsersRequest = ()=>{
    return {
        type : FETCH_USERS_REQUEST
    }
}


const fetchUsersSuccess = users =>{
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure = error =>{
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true
            }

        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
        
        default: return state
    }
}

//making an api call
const fetcUsers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response =>{
                const users = response.data.map(user =>user.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error =>{
                dispatch(fetchUsersFailure(error.message))
            })
    }
}



const store = createStore(reducer,applyMiddleware(thunkMiddleware))
// console.log('Initial state',store.getState());
store.dispatch(fetcUsers())
store.subscribe(()=> console.log(store.getState()))



//work flow first create initial state , actions, reducer
//then to perform async operation we need to use middleware called thunkMiddleware
//passit to the store then fetchUser method is dispatched to the store which will 
//return a function which will heps to dispatch/pass the actions like 
//first it dispatch fetchUsersRequest method which returns the obj this obj
// is passed as action to the reducer function so the based on the type case one 
// will trigger which will return loading true rest states as default as initialState