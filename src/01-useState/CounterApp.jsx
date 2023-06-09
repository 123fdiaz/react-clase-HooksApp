import { useState } from "react"

export const CounterApp = () => {
  
    const [{counter1,counter2}, setCounter] = useState({
        counter1:10,
        counter2:20,
    })
  
    return (

    <>
    <h1>Counter1: {counter1}</h1>
    <h1>Counter2: {counter2}</h1>
    <hr />
    <button className="btn btn-success" onClick={() => setCounter({
        
        counter1: counter1 +1,
        counter2,

    })}> +1 </button>
    <button> -1 </button>
    
    </>
  )
}
