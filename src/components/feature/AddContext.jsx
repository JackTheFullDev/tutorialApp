import { createContext, useState } from "react";

export const addContext = createContext();

export function AddProvider({ children }) {
  const [addTutorialData, setAddTutorialData] = useState([]);
  const [editTutorialData, setEditTutorialData] = useState([]);

  const addToLibrary = (_addTutorialData) => {
    setAddTutorialData((_previewState) => [
      ..._previewState,
      { _addTutorialData },
    ]);
    console.log(addTutorialData);
  };
  const removeAddedFromLibrary = (id) => {
    setAddTutorialData((_previewState) => {
      const tutorial = [..._previewState];
      // console.log(tutorial);
      tutorial.splice(id, 1);
      return tutorial;
    });
    //   console.log(addTutorialData);
  };
  const editAddedCourse = (id, _addTutorialData) => {
    setAddTutorialData((_previewState) => {
      const newTutorial = [..._previewState];
      newTutorial[id] = { _addTutorialData };
      console.log(newTutorial);
      return newTutorial;
    });
  };
  return (
    <addContext.Provider
      value={{
        addToLibrary,
        addTutorialData,
        removeAddedFromLibrary,
        editAddedCourse,
      }}
    >
      {children}
    </addContext.Provider>
  );
}
