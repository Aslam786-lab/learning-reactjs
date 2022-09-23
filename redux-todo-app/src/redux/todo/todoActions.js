import TodoService from '../../services/TodoService'
import { CREATE_TODOS, DELETE_TODOS, LOADING_TODOS, RETRIEVE_TODOS } from './todoTypes';

export const retrieveTodos = () => async(dispatch) =>{
    const res = await TodoService.get();
    dispatch(loadingTodos())

    dispatch({
        type:RETRIEVE_TODOS,
        payload: res.data
    })
}

const loadingTodos = ()=>{
    return {
        type: LOADING_TODOS
    }
}

export const createTodos = text => (dispatch) =>{
    
   TodoService.create({text})
   dispatch({
    type:CREATE_TODOS, 
    payload: {text:text}
   })

}  


export const deleteTodos = id => (dispatch) =>{
    TodoService.remove(id)
    dispatch({
        type: DELETE_TODOS,
        payload: id
    })
}