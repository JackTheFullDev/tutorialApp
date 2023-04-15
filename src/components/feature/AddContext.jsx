import { createContext, useState } from "react";

export const addContext=createContext();

export function AddProvider ({children}) 
{
    const [addTutorialData,setAddTutorialData]=useState([]);

    const addToLibrary = (_addTutorialData) =>
    {
        setAddTutorialData((_previewState) => [..._previewState,{_addTutorialData}]);
            //console.log(addTutorialData);
    } 
    const removeAddedFromLibrary = (id) =>
    {
        setAddTutorialData((_previewState) => {
            const tutorial=[..._previewState];
            tutorial.splice(id,1);
            return tutorial;
        });
         //   console.log(addTutorialData);
    }
    return(
        <addContext.Provider value={{addToLibrary,addTutorialData,removeAddedFromLibrary}}>
            {children}
        </addContext.Provider>
    )
}
