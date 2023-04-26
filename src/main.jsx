import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './01-useState/CounterApp'
 import { CounterWithCustomHooks } from './01-useState/CounterWithCustomHooks'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { MultiplesCustomHooks } from './03-examples/MultiplesCustomHooks'
import { FocusScreem } from './04-useRef/FocusScreem'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FocusScreem />
  </React.StrictMode>,
)
