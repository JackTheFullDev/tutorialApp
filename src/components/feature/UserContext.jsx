import { createContext, useEffect, useState } from "react";
import bcrypt from 'bcryptjs';
export const userContext = createContext();


export const UserProvider=({children})=>
{

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [userTutorial, setUserTutorial] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [tutorials, setTutorials] = useState([]);

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
        setUsername,setPassword,handleLogOut,user,handleLogin,tutorials
    };

    return(
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}