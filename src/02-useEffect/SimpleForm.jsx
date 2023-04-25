import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
  
    const [formState, setFormState] = useState({
        username: 'francisco',
        email: 'francisco@gmail'
    })
  
    const {username,email} = formState;

    const onInpuntChange = ({target}) => {

        const {name,value} = target;
        setFormState({
            ...formState,
            [name]: value,
        });

    }



    // se dispara cuando se carga por primera vez
    useEffect(()=>{

    },[]);

    // se dispara cuando cambia algo en el formulario
    useEffect(()=>{

    },[formState]);

    // se dispara cuando cambia algo en el campo del correo
    useEffect(()=>{

    },[email]);


    return (

    <>
    <h1>Simple Formulario</h1>
    <hr/>
    <input 
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInpuntChange}
    />
    <input 
        type="email"
        className="form-control mt-2"
        placeholder="Francisco.diaz@hotmail.com"
        name="email"
        value={email}
        onChange={onInpuntChange}
    /> 
    {
        (username === 'usuario1') && <Message /> 
    }  
    </>
  )
}
