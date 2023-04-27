import { Route, useNavigate } from "react-router-dom";
import Edit from "../Edit";
import { useState } from "react";

export const AddCourse = ({ addData, deleteCourseFunc, index }) => {
  const data = addData._addTutorialData;
  const [showEdit, setShowEdit] = useState(false);
  console.log(addData);
  const {
    selectedImage,
    tutorialname,
    tutorialStartDate,
    tutorialEndDate,
    tutorialDays,
    tutorialStartTime,
    tutorialEndTime,
    tutorialNumberOfPeople,
    tutorialLevel,
    
  } = addData._addTutorialData;
  console.log(tutorialname);
  return (
    <div className="tutorial-component">
      <img src={selectedImage} alt={tutorialname} />
      <div className="tutorial-complex-data">
        <p>Start date: {tutorialStartDate}</p>
        <p>End date: {tutorialEndDate}</p>
        <p>day/s: {tutorialDays.join("-")} </p>
        <p>
          Time:{tutorialStartTime}-{tutorialEndTime}
        </p>
        <p>amount: 0/{tutorialNumberOfPeople}</p>
        <p>level: {tutorialLevel}</p>
      </div>
      <div className="inner-info-content">
        <h1 id="tutorial-name">{tutorialname}</h1>
        <p id="canal-name">UserNew</p>
        <div className="bottom-tutorial-components">
          <div className="bottom-totalhour-likes">
            <p>12 h video</p>
            <p>13 Likes</p>
          </div>
          <button
            onClick={() => setShowEdit(!showEdit)}
            style={{ color: "yellow" }}
          >
            edit
          </button>
          <button
            onClick={() => deleteCourseFunc(index)}
            style={{ color: "red" }}
          >
            delete
          </button>
        </div>
      </div>
      {showEdit && (
        <div className="edit-content">
          <Edit
            data={data}
            index={index}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          ></Edit>
        </div>
      )}
    </div>
  );
};
