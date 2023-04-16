import { createContext, useState } from "react";

export const addContext=createContext();

export function AddProvider ({children}) 
{
    const [addTutorialData,setAddTutorialData]=useState([]);

    const addToLibrary = (_addTutorialData) =>
    {
        setAddTutorialData((_previewState) => [..._previewState,{_addTutorialData}]);
            
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
    const editAddedCourse = (data,updatedData) =>
    {   
    
        console.log(data);
        
       
    }
    return(
        <addContext.Provider value={{addToLibrary,addTutorialData,removeAddedFromLibrary,editAddedCourse}}>
            {children}
        </addContext.Provider>
    )
}
