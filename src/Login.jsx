import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

import { userContext } from "./components/feature/UserContext";
export const Login = () => {
  //navigate
  const navigate = useNavigate();

  const { user, handleLogin, setUsername, setPassword ,tutorials} =
    useContext(userContext);

   // console.log(tutorials)
  return (
    <section className="login-page">
      <div className="main-section">
        <h1 style={{color:"#48CB3D"}}>CodeMasterAcademy</h1>
        <h3>Unlock your potential with CodeMasterAcademy</h3>
        <div>
          <label>User name</label>
          <input
            placeholder="username..."
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            placeholder="password..."
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="login-button" onClick={() => handleLogin()}>Login</button>
        <div>
          <p>
            New user? <button style={{color:"#48CB3D",backgroundColor:"transparent"}}>Join us</button>
          </p>
        </div>
      </div>

      {user &&
        /* 
        <div>
          <h2>Hello!</h2>
          <p>Username: {user.username}</p>
          <p>id: {user.id}</p>
          <button onClick={handleLogOut}>Logout</button>

          <h3>Your Tutorials:</h3>
          {tutorials.map((tutorial) => (
            <div key={tutorial.tutorial_id}>
              <p>Title: {tutorial.title}</p>
              { Render other tutorial information as needed }
            </div>
          ))}
        </div>
        */
        navigate("/")
        
        }
    </section>
  );
};
