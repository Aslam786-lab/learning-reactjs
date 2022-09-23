import http from '../http-common'

const get = () =>{
    return http.get("/")
}

const create = data =>{
    return http.post("/",data)
}

const remove = id =>{
    return http.delete(`/${id}`)
}


const TodoService = {
    get,
    create,
    remove
}

export default TodoService