import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [num, setnum] = useState(0);

  function sum(n) {
    return (n * (n + 1)) / 2;
  }

  const ans = useMemo(() => {
    return sum(num);
  }, [num]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter number"
        value={num}
        onChange={(e) => setnum(Number(e.target.value))}
      />

      <button>Go</button>

      <h4>
        The sum of numbers from 1 to {num} is {ans}
      </h4>
    </div>
  );
}

export default App;