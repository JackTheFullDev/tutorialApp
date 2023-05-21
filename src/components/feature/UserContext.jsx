import { createContext, useEffect, useState } from "react";
import bcrypt from "bcryptjs";
export const userContext = createContext();

export const UserProvider = ({ children }) => {
  //login
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
 // const [userTutorial, setUserTutorial] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [tutorials, setTutorials] = useState([]);
  //registration

  const [userNameRegistration, setUserNameRegistration] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userPassword, setUserPassword] = useState(null);
  const registerUser = (username, password) => {
    fetch("http://localhost:3000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password ,userEmail}),
    })
      .then((response) => response.json())
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  //

  useEffect(() => {
    // Fetch the user's tutorials after a successful login
    if (user) {
      fetch(`http://localhost:3000/tutorials/user/${user.id}`)
        .then((response) => response.json())
        .then((data) => setTutorials(data))
        .catch((error) => console.error("Error fetching tutorials:", error));
    }
  }, [user,tutorials]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const { error } = await response.json();
        throw new Error(error);
      }

      const { message, user } = await response.json();
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        throw new Error("Incorrect password");
      }

      setUser(user);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.message);
      setUser(null);
    }
  };
  const handleLogOut = () => {
    setUser(null);
  };

  //edit
  const editTutorial = (tutorialId, updatedData) => {

    const{tutorialname,
        tutorialStartDate,
        tutorialEndDate,
        tutorialStartTime,
        tutorialEndTime,
        tutorialDays,
        tutorialNumberOfPeople,
        tutorialLevel,
        selectedImage,
        id,
        tutorialRole,
        index}=updatedData
   
    fetch(`http://localhost:3000/tutorials/${tutorialId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({tutorialname,
        tutorialStartDate,
        tutorialEndDate,
        tutorialStartTime,
        tutorialEndTime,
        tutorialDays,
        tutorialNumberOfPeople,
        tutorialLevel,
        selectedImage,
        id,
        tutorialRole,
        index}),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log("Tutorial updated:", data);
        // Perform any necessary actions after the tutorial has been updated
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  //delete
  const deleteTutorial = (tutorialId) => {
    fetch(`http://localhost:3000/tutorials/${tutorialId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend
        console.log("Tutorial deleted:", data);
        // Perform any necessary actions after the tutorial has been deleted
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  };

  let value = {
    setUsername,
    setPassword,
    handleLogOut,
    user,
    handleLogin,
    tutorials,
    registerUser,
    setUserNameRegistration,
    setUserEmail,
    setUserPassword,
    userPassword,
    userNameRegistration,
    editTutorial,
    deleteTutorial,
  };

  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
