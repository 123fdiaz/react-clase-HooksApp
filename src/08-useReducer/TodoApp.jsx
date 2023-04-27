import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hook/useTodo";


export const TodoApp = () => {


 const {todos,handlersDeleteTodo,handlersTogloTodo,handlerNewTodo,totalTodos,todosPending} = useTodo(); 
 return (
<>
<h1>Todo app: {totalTodos} <small>Pendientes: {todosPending}</small> </h1>
<hr />
<div className="row">
    <div className="col-7">
        <TodoList todos={todos} 
        onDeleteTodo={id => handlersDeleteTodo(id)}
        onTogleTodo={id => handlersTogloTodo(id)}/>
    </div>
    <div className="col-5">
        <h4>Agregar todo</h4>
        <hr />
        <TodoAdd onNewTodo={handlerNewTodo} />

    </div>
</div>

</>
    
    )
}
