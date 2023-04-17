import { useContext, useState } from "react";
import { HomeContext } from "./feature/HomeContext";

import "./Library.css";
import { addContext } from "./feature/AddContext";

import { LibraryCourse } from "./template/LibraryCourse";
import { AddCourse } from "./template/AddCourse";
import { EditCourse } from "./template/EditCourse";
import Edit from "./Edit";

export const Library = () => {
  const { tutorialData, removeFromLibrary } = useContext(HomeContext);
  const { addTutorialData,removeAddedFromLibrary,editAddedCourse } = useContext(addContext);
  const [showEdit,setShowEdit] = useState(!true);
  return (
    <section className="home-section">
      <div className="home-content">
        <p>Content you signed up for </p>
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
        <p>Content you created</p>
        <div>
          {addTutorialData.map((data, index) => {
            return (
              <AddCourse
                addData={data}
                key={index}
                deleteCourseFunc={removeAddedFromLibrary}
                index={index}
              >
                
              </AddCourse>
            );
          })}
           
        </div>
      </div>
     
    </section>
  );
};

export default Library;
