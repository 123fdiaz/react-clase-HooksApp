import { useRef } from "react"

export const FocusScreem = () => {
  
  const inpuRef = useRef();

  const onClick = () => {

    inpuRef.current.select();
  }

  return (
<>
<h1>FocusCreem</h1>
<hr />
<input 
ref={inpuRef}
type="text"
className="form-control"
placeholder="ingrese valor"
 />

<button onClick={onClick} className="btn btn-primary mt-2"> Set focus</button>
</>
  )
}
