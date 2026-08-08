import { Fragment,memo,React } from "react";
import { useState } from "react"

function App() {
  return (
    <div>
 <Headerwithbutton></Headerwithbutton>
    <Header title ="Nikhil"></Header>
    <Header title ="sinha"></Header>
    </div>
   
  );
}
function Headerwithbutton(){
 const [title,settitle] = useState("my name is Niku");
 
 function updatetitle(){
  settitle("My name is " + Math.random());
 }
return (
  <div>
<button onClick={updatetitle} >Update the title</button>
<Header title ={title}></Header>
  </div>
)
}
const Header= React.memo(function ({title}){
  return(
    <div>{title}</div>
  )
})
export default App