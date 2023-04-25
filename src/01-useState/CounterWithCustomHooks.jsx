import { useCounter } from "../hook/useCounter"


export const CounterWithCustomHooks = () => {
  
    const {   
        counter,
        increment,
        reset,
        decrement} = useCounter();
  
    return (

    <>
    <h1>Counter with hooks: {counter} </h1>
    <hr />
    <button className="btn btn-primary" onClick={increment}> +1 </button>
    <button className="btn btn-primary" onClick={reset}> Reset </button>
    <button className="btn btn-primary" onClick={decrement}> -1 </button>
    </>
  )
}
