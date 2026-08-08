import "./App.css";
import React ,{useCallback,useEffect,useRef} from 'react'
import { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
//import { Dashboard } from "../components/Dashboard";
//import { Landing } from "../components/Landing";
const Landing = React.lazy(()=>import("../components/Landing"))
const Dashboard = React.lazy(()=>import("../components/Dashboard"))

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar/>

        <Routes>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense> } />
          <Route path="/dashboard" element={<Suspense fallback={"loading"}><Dashboard /></Suspense> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing page
      </button>

      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
}

export default App;