import { createContext, useState } from "react";

export const HomeContext=createContext();

export function HomeProvider ({children}) 
{
    const [tutorialData,setTutorialData]=useState([]);

    const addToLibrary = (tutorialName,date,days,amount,level,image,canalName,maxAmount) =>
    {
        setTutorialData((_previewState) => [..._previewState,{tutorialName,date,days,amount,level,image,canalName,maxAmount}]);
        
    }

    const removeFromLibrary =(id) =>
    {
        setTutorialData((_previewState)=>
        {
            const tutorials=[..._previewState];
            tutorials.splice(id,1)
            return tutorials;
        })
    }

    return(
        <HomeContext.Provider value={{addToLibrary,removeFromLibrary,tutorialData}}>
            {children}
        </HomeContext.Provider>
    )
}
