import { useContext, useEffect } from "react";
import { userContext } from "./components/feature/UserContext";
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {
  const {
    user,
    registerUser,
    setUserNameRegistration,
    setUserEmail,
    setUserPassword,
    userNameRegistration,
    userPassword,
  } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <form className="login-page">
      <div className="main-section">
        <h1 style={{ color: "#48CB3D" }}>CodeMasterAcademy</h1>
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
        <button
          className="login-button"
          onClick={() => registerUser(userNameRegistration, userPassword)}
          type="submit"
        >
          Registration
          
        </button>
        <div>
          <p>
            Old Friend?{" "}
            <Link to={"/login"} style={{ color: "#48CB3D" }}>
              Log In
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
};
