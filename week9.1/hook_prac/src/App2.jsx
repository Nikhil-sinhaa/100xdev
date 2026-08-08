import { useState, useEffect } from "react";

function useDebounce(value, timeout) {
  const [debounceValue, setDebouncevalue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncevalue(value);
    }, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [value, timeout]);

  return debounceValue;
}

function App() {
  const [value, setValue] = useState("");
  const debounceValue = useDebounce(value, 500);

  return (
    <>
      <div>Debounce Value is {debounceValue}</div>

      <input
        type="text"
        placeholder="type your text"
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
}

export default App;