import { Route, useNavigate } from "react-router-dom";
import Edit from "../Edit";
import { useState } from "react";

export const AddCourse = ({ addData, deleteCourseFunc, index }) => {
  const data = addData._addTutorialData;
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="tutorial-component">
      <img src={data.selectedImage} alt={data.tutorialname} />
      <div className="tutorial-complex-data">
        <p>Start date: {data.tutorialStartDate}</p>
        <p>End date: {data.tutorialStartDate}</p>
        <p>day/s: {data.tutorialDays.join("-")} </p>
        <p>
          Time:{data.tutorialStartTime}-{data.tutorialEndTime}
        </p>
        <p>amount: 0/{data.tutorialNumberOfPeople}</p>
        <p>level: {data.tutorialLevel}</p>
      </div>
      <div className="inner-info-content">
        <h1 id="tutorial-name">{data.tutorialname}</h1>
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
