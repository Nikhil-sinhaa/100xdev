import { useEffect, useState } from "react"

function App() {
const [ socket,setSocket] = useState<null|WebSocket>(null);
const [ latestmessage,setlatestmessage] = useState("");
const [message ,setmessage]=useState("");
useEffect(()=>{
const socket = new WebSocket('ws://localhost:8080');
socket.onopen = ()=>{
  console.log('Connected')
}
socket.onmessage=(message)=>{
  console.log('Received message' ,message.data)
  setlatestmessage(message.data);
}
setSocket(socket)
},[])
return ()=>{
  socket?l.close();
}
if(!socket){
  return <div>
    loading......
  </div>
}
  return ( 
    <>
    <input onChange={(e)=>{
      setmessage(e.target.value)
    }}></input>
    <button onClick={()=>{
      socket.send('hello world')
    }}>Send</button>
    {latestmessage}
    </> 
  )
}

export default App
