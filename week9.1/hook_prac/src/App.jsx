import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [render, setrender] = useState(true)


  useEffect(()=>{
    setInterval(()=>{

        setrender(render=>!render)
      },5000)
    },[])
  return (
    <>
   {render? <Mycomponent/> : <div></div>}
   </>
  )
}

function Mycomponent(){

  useEffect(()=>{

    console.log("Component Mounted")

    return ()=>{
      console.log("component Unmounted")
    }
  },[])
 return <div>Hi i am mounted</div>

}
export default App
