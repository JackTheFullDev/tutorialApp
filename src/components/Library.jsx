import { useContext } from "react";
import { HomeContext } from "./feature/HomeContext";

import "./Library.css";
import { addContext } from "./feature/AddContext";
import { Course } from "./template/Course";
import { LibraryCourse } from "./template/LibraryCourse";

export const Library = () => {
  const { tutorialData, removeFromLibrary } = useContext(HomeContext);
  const { addTutorialData } = useContext(addContext);
  return (
    <section className="home-section">
      <div className="home-content">
        <p>Content you signed up for </p>
        <div className="grid-with-home-content">
          {tutorialData.map((data, index) => {
            return (
             
              <LibraryCourse data={data} key={index} removeFromLibrary={removeFromLibrary}></LibraryCourse>
            );
          })}
        </div>
        <p>Content you created</p>
        <div>
          {addTutorialData.map((ownContentData) =>
            console.log(ownContentData._addTutorialData.tutorialname)
          )}

          {addTutorialData.map((ownContentData, index) => {
                return (
                  
                );
              })}


        </div>
      </div>
    </section>
  );
};

export default Library;
