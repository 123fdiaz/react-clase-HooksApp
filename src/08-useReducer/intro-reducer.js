
const initialState = [{
    id:1,
    todo: 'Recolectar piedra del alma',
    done: false,
}]

const todoReducer = ( state = initialState, action = {}) => {

    if (action.type === '[TODO] add todo') {

        return [...state, action.payload];
    }

    return state;
}

let todos = todoReducer();

const newTodo = {

    id:3,
    todo: 'Recolectar piedra del poder',
    done: false,
}

const addNewTodo = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer(todos,addNewTodo);
console.log(todos);