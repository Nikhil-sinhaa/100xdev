import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
      <Todo title='Go to gym'  description='at 5:30'  done={false} /> 
    </>
  )
}
interface Todoprop{
  title:string,
  description:string,
  done:boolean
}
function Todo(props:Todoprop){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>

  </div>
}


export default App
