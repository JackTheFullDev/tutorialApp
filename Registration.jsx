import { useContext } from "react";
import { userContext } from "./src/components/feature/UserContext";

export const Registration=()=>
{
    const {user,registerUser,setUserNameRegistration,setUserEmail,setUserPassword,userNameRegistration,userPassword} =
    useContext(userContext);
    return(
        <section className="login-page">
        <div className="main-section">
          <h1 style={{color:"#48CB3D"}}>CodeMasterAcademy</h1>
          <h3>Unlock your potential with CodeMasterAcademy</h3>
          <div>
            
            <label>Email</label>
            <input
              placeholder="username..."
              onChange={(e) => setUserEmail(e.target.value)}
              type="email"
            />
          </div>
          <div>
            
            <label>User name</label>
            <input
              placeholder="username..."
              onChange={(e) => setUserNameRegistration(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              placeholder="password..."
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={() => registerUser(userNameRegistration,userPassword)}>Registration</button>
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
    )
}