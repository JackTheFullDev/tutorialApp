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
             
              <LibraryCourse data={data} key={index}></LibraryCourse>
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
                  <div className="tutorial-component" key={index}>
                    <img src={ownContentData._addTutorialData.selectedImage}/>
                    <div className="tutorial-complex-data">
                      <p>Start date: {ownContentData._addTutorialData.tutorialStartDate}</p>
                      <p>End date: {ownContentData._addTutorialData.tutorialEndDate}</p>
                      <p>day/s: {ownContentData._addTutorialData.tutorialDays.join("-")} </p>
                      <p>
                        amount: 0/{ownContentData._addTutorialData.tutorialNumberOfPeople}
                      </p>
                      <p>level: {ownContentData._addTutorialData.tutorialLevel}</p>
                    </div>
                    <div className="inner-info-content">
                      <h1 id="tutorial-name">{ownContentData._addTutorialData.tutorialName}</h1>
                      <p id="canal-name">MyCanalName</p>
                      <div className="bottom-tutorial-components">
                        <div className="bottom-totalhour-likes">
                          <p>h video</p>
                          <p>Likes</p>
                        </div>
                        <button style={{color:"yellow"}} onClick={()=>(removeFromLibrary(data))}>Resign</button>
                      </div>
                    </div>
                  </div>
                 
                );
              })}


        </div>
      </div>
    </section>
  );
};

export default Library;
