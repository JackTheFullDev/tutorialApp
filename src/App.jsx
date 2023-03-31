import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/feature/Navigation";
import Library from "./components/Library";
import Add from "./components/Add";
function App() {

  return (
    <div className="App">
      <Router>
        {Navigation}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
