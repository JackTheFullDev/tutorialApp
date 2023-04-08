import { createContext, useState } from "react";

export const HomeContext=createContext();

export function HomeProvider ({children}) 
{
    const [tutorialData,setTutorialData]=useState([]);

    const addToLibrary = (_tutorialName,_date,_days,_amount,_level,_image) =>
    {
        setTutorialData((_previewState) => [..._previewState,{_tutorialName,_date,_days,_amount,_level,_image}]);
        console.log(tutorialData);
    }


    return(
        <HomeContext.Provider value={{addToLibrary,tutorialData}}>
            {children}
        </HomeContext.Provider>
    )
}
