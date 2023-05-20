import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Library from "./components/Library";
import Add from "./components/Add";
import { Navigation } from "./components/feature/Navigation";
import { HomeProvider } from "./components/feature/HomeContext";
import { AddProvider } from "./components/feature/AddContext";
import { Edit } from "./components/Edit";
function App() {
  return (
    <div className="App">
      <HomeProvider>
        <AddProvider>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/library" element={<Library />}></Route>
              <Route path="/add" element={<Add />}></Route>
              <Route path="/library/edit" element={<Edit />}></Route>
            </Routes>
          </Router>
        </AddProvider>
      </HomeProvider>
    </div>
  );
}

export default App;
