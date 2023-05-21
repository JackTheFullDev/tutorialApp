import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Library from "./components/Library";
import Add from "./components/Add";
import { Navigation } from "./components/feature/Navigation";
import { HomeProvider } from "./components/feature/HomeContext";
import { AddProvider } from "./components/feature/AddContext";
import { Edit } from "./components/Edit";
import { Login } from "./Login";
import { UserProvider } from "./components/feature/UserContext";
import { Registration } from "../Registration";
function App() {
  return (
    <div className="App">
      <UserProvider>
      <HomeProvider>
        <AddProvider>
          <Router>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/library" element={<Library />}></Route>
              <Route path="/add" element={<Add />}></Route>
              <Route path="/library/edit" element={<Edit />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/registration" element={<Registration/>}></Route>
              

            </Routes>
          </Router>
        </AddProvider>
      </HomeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
