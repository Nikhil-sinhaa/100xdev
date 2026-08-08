import { useState, useEffect } from "react";
import axios from "axios";


function useInterval(){
    const [count,setCount] = useState(0)
    useEffect(()=>{
       const value = setInterval(()=>{setCount(count=>count+1)},1000)
       return (
       ()=> {clearInterval(value)}
       )
    },[])
    return count;
}
function App(){
    const count = useInterval();
    return (
        <div>{count}</div>
    ) 
}
//mouse pointer 
function useMousePointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
}

function App() {
  const mouse = useMousePointer();

  return (
    <div>
      <h1>Mouse Position</h1>
      <h2>X: {mouse.x}</h2>
      <h2>Y: {mouse.y}</h2>
    </div>
  );
}


function useIsOnline(){
    const [ isOnline ,setIsOnline] = useState(window.navigator.online);
    useEffect(()=>{
        window.addEventListener("Online",()=>{
            setIsOnline(true)
        })
        window.addEventListener("Offline",()=>{
            setIsOnline(false)
        })
    },[])
    return isOnline
}


function App(){
    const isOnline = useIsOnline();
    if(isOnline){
        return "You are Online"
    }
    return "You are offline connect to internet"
}
function useTodos(n) {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = () => {
      axios
        .get("https://sum-server.100xdevs.com/todos")
        .then((res) => {
          setTodos(res.data.todos);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };

    // Initial fetch
    fetchTodos();

    // Fetch every n seconds
    const interval = setInterval(fetchTodos, n * 1000);

    return () => clearInterval(interval);
  }, [n]);

  return [todos, loading];
}

function App() {
  const [todos, loading] = useTodos(10);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </>
  );
}

function Todo({ title, description }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default App;