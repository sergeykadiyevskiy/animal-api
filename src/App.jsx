import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Animals from "./components/Animals";
import Home from "./components/Home";
import NewAnimal from "./components/NewAnimal";
import OneAnimal from "./components/OneAnimal";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/new-animal" element={<NewAnimal />} />
        <Route path="/animals/:id" element={<OneAnimal />} />
      </Routes>
    </div>
  );
}

export default App;
