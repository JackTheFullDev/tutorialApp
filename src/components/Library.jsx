import { useContext, useState } from "react";
import { HomeContext } from "./feature/HomeContext";

import { addContext } from "./feature/AddContext";

import { LibraryCourse } from "./template/LibraryCourse";
import { AddCourse } from "./template/AddCourse";

export const Library = () => {
  const { tutorialData, removeFromLibrary } = useContext(HomeContext);
  const { addTutorialData, removeAddedFromLibrary } = useContext(addContext);

  
  return (
    <section className="home-section">
      <h1>Library</h1>
      <div className="home-content">
       {tutorialData.length>0?<p>Content you signed up for </p>:null}
        <div className="grid-with-home-content">
          {tutorialData.map((data, index) => {
            return (
              <LibraryCourse
                data={data}
                key={index}
                courseFunction={removeFromLibrary}
              ></LibraryCourse>
            );
          })}
        </div>
        {addTutorialData.length>0?<p>Content you created</p>:null}
        <div className="grid-with-home-content">
          {addTutorialData.map((data, index) => {
            return (
              <>
                <AddCourse
                  addData={data}
                  key={index}
                  deleteCourseFunc={removeAddedFromLibrary}
                  index={index}
                ></AddCourse>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Library;
