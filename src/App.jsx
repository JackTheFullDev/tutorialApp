import { useState } from "react";

import "./App.css";
import Home from "./components/home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Library from "./components/Library";
import Add from "./components/Add";
import {Navigation} from "./components/feature/Navigation";

import tutorialImg from "./data.json";
function App() {

  return (
    <div className="App">
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
