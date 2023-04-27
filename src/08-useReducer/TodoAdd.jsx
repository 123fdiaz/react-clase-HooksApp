import { useForm } from "../hook/useForm";

export const TodoAdd = ({onNewTodo}) => {
  
    const{ formState, onInpuntChange,description} = useForm({
        description: '',
    });
  
    const onFormSubmit = (event) => {
    
        event.preventDefault();

        const newTodo ={
            id: new Date().getTime(),
            description,
            done:false,
        }
        onNewTodo(newTodo);
    }  

  
  return (
<>
<form onSubmit={onFormSubmit}>
            <input 
             type="text"
             placeholder="hola mundo"
             className="form-control"
             name="description"
             value={description}
             onChange={onInpuntChange}

             />
             <button
                type="submit"
                className="btn btn-primary mt-1"
             >Agregar</button>
        </form>
</>
  )
}
