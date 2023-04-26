import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hook/useForm";

export const FormWithCustomHook = () => {
    
    //para utilizar un hook de un formulario
    const{ formState, onInpuntChange,username,email,contrasena,onReset } = useForm({
        username: '',
        email: '',
        contrasena: ''
    });
// const {username,email,contrasena} = formState;
  



    // // se dispara cuando se carga por primera vez
    // useEffect(()=>{

    // },[]);

    // // se dispara cuando cambia algo en el formulario
    // useEffect(()=>{

    // },[formState]);

    // // se dispara cuando cambia algo en el campo del correo
    // useEffect(()=>{

    // },[email]);


    return (

    <>
    <h1>Formulario con custom hook</h1>
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

    <input 
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="contrasena"
        value={contrasena}
        onChange={onInpuntChange}
    /> 

<button className="btn btn-primary mt-2" onClick={onReset}> Reset</button>
    </>
  )
}
