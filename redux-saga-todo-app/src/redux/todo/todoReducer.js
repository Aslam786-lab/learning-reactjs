import { CREATE_TODOS, DELETE_TODOS, LOADING_TODOS, RETRIEVE_TODOS } from "./todoTypes"

const initialState = {
    loading: true,
    todo:[],
    
}

const todoReducer = (state = initialState, action) =>{
    const {type, payload} = action

    switch(type){

        case LOADING_TODOS:
            return {
                ...state,
                loading: true
            }

        case RETRIEVE_TODOS:
            return {
                loading:false,
                todo : payload
            }

        case CREATE_TODOS:
            return {
                ...state,
                todo: [...state.todo, payload]
            }

        case DELETE_TODOS:
            return {
                todo: [...state.todo.filter(({id})=>id !== payload)]
            }

        default: return state
    }
}

export default todoReducer