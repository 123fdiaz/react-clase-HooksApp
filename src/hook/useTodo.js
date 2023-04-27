import { useEffect, useReducer, useState } from 'react'
import { todoReducer } from '../08-useReducer/todoReducer';
    const initialState = [
        // {
        //     id: new Date().getTime(),
        //     description: 'Recolectar piedra del alma',
        //     done: false,

        // },
        // {
        //     id: new Date().getTime() + 100,
        //     description: 'Recolectar piedra del alma',
        //     done: false,

        // }


    ]

    const init = () => {

        return JSON.parse(localStorage.getItem('todos')) || [];
    }
export const useTodo = () => {

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);
    
    const [counter, setCounter] = useState(todos);

    useEffect(() => {

        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handlerNewTodo = (todo) => {
        const action = {
            type: 'add',
            payload: todo,
        }
        dispatchTodo(action)
        totalTodos();
    }

    const handlersDeleteTodo = (id) => {

        const action = {
            type: 'delete',
            payload: id,
        }
        dispatchTodo(action);
        totalTodos();
    }

    const handlersTogloTodo = (id) => {


        const action = {
            type: 'togle',
            payload: id,
        }
        dispatchTodo(action);
        totalTodos();
    }
    
    return {
        ...todos,
        todos,
        handlerNewTodo,
        handlersDeleteTodo,
        handlersTogloTodo,
        totalTodos: todos.length,
        todosPending: todos.filter(todo => !todo.done).length,

    }

}
