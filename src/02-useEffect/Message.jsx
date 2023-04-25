import { useEffect } from "react"

export const Message = () => {

useEffect(() => {
  console.log('message montado');

  return () => {
    console.log('message desmontado');
  }
}, [])

return (
<>
<h3>usuario ya existe</h3>

</>
  )
}
