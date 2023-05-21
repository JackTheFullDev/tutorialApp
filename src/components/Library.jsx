import { useContext, useState } from "react";
import { HomeContext } from "./feature/HomeContext";

import { addContext } from "./feature/AddContext";

import { LibraryCourse } from "./template/LibraryCourse";
import { AddCourse } from "./template/AddCourse";
import { userContext } from "./feature/UserContext";
import { UserCourses } from "./template/UserCourses";

export const Library = () => {
  const { tutorialData, removeFromLibrary } = useContext(HomeContext);
  const { addTutorialData, removeAddedFromLibrary } = useContext(addContext);

  const { user, tutorials ,deleteTutorial,editTutorial} = useContext(userContext);


  return (
    <section className="home-section">
      <h1>Library</h1>
      <div className="home-content">
        {tutorialData.length > 0 ? <p>Content you signed up for </p> : null}
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
        
        <div className="grid-with-home-content"></div>
        {user && <p>Content you created</p>}
        {user &&
          tutorials.map((data, index) => {
            return (
              <>
                <UserCourses
                  tutorialData={data}
                  key={index}
                  deleteCourseFunc={removeAddedFromLibrary}
                  index={data.tutorial_id}
                deleteTutorial={deleteTutorial}
                editTutorial={editTutorial}
                ></UserCourses>
              </>
            );
          })}
      </div>
    </section>
  );
};

export default Library;
