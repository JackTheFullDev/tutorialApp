import { createContext, useEffect, useState } from "react";
import bcrypt from 'bcryptjs';
export const userContext = createContext();


export const UserProvider=({children})=>
{
//login
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [userTutorial, setUserTutorial] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [tutorials, setTutorials] = useState([]);
    //registration

    const [userNameRegistration,setUserNameRegistration]=useState(null);
    const [userEmail,setUserEmail]=useState(null);
    const [userPassword,setUserPassword]=useState(null);
    const registerUser = (username, password) => {
        // Make a POST request to your backend API endpoint to register the user
        fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the backend
            if (data.success) {
              alert('Registration successful!');
              // Redirect the user to the login page or perform any other necessary actions
            } else {
              alert('Registration failed. Please try again.');
            }
          })
          .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
          });
      };

    //

    useEffect(() => {
        // Fetch the user's tutorials after a successful login
        if (user) {
          fetch(`http://localhost:3000/tutorials/user/${user.id}`)
            .then((response) => response.json())
            .then((data) => setTutorials(data))
            .catch((error) => console.error('Error fetching tutorials:', error));
        }
      }, [user]);

     
      const handleLogin = async () => {
        try {
          const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
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
            throw new Error('Incorrect password');
          }
    
          setUser(user);
          setErrorMessage('');
        } catch (error) {
          setErrorMessage(error.message);
          setUser(null);
        }
      };
      const handleLogOut=()=>
      {
        setUser(null);
      }



    
    let value={
        setUsername,setPassword,handleLogOut,user,handleLogin,tutorials,registerUser,setUserNameRegistration,setUserEmail,setUserPassword,userPassword,userNameRegistration
    };

    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}