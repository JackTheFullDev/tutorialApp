import { createContext, useState } from "react";

export const addContext=createContext();

export function AddProvider ({children}) 
{
    const [addTutorialData,setAddTutorialData]=useState([]);

    const addToLibrary = (_addTutorialData) =>
    {
        setAddTutorialData((_previewState) => [..._previewState,{_addTutorialData}]);
            console.log(addTutorialData);
    }
    return(
        <addContext.Provider value={{addToLibrary,addTutorialData}}>
            {children}
        </addContext.Provider>
    )
}
