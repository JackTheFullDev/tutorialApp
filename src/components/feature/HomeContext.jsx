import { createContext, useState } from "react";

export const HomeContext=createContext();

export function HomeProvider ({children}) 
{
    const [tutorialData,setTutorialData]=useState([]);

    const addToLibrary = (_tutorialName,_date,_days,_amount,_level,_image,_canalName,_maxAmount) =>
    {
        setTutorialData((_previewState) => [..._previewState,{_tutorialName,_date,_days,_amount,_level,_image,_canalName,_maxAmount}]);
        
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
