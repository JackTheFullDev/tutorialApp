import { useState } from "react";

import "./App.css";
import Home from "./components/Home";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Library from "./components/Library";
import Add from "./components/Add";
import {Navigation} from "./components/feature/Navigation";

import tutorialImg from "./data.json";
import { HomeProvider } from "./components/feature/HomeContext";
function App() {

  return (
    <div className="App">
      <HomeProvider>
      <Router>
      <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/add" element={<Add />}></Route>
        </Routes>
      </Router>
      </HomeProvider>
    </div>
  );
}

export default App;
