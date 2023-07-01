import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" exact Component={Home} />
    </Routes>
  );
}

export default App;
