import { useState } from "react";
import Edit from "../Edit";
import { ButtonTemplateEdit } from "./ButtonTemplateEdit";
import { ButtonTemplateDelete } from "./ButtonTemplateDelete";

export const UserCourses = ({
  tutorialData,
  deleteTutorial,
  editTutorial,
  index,
}) => {
  const {
    days,
    end_date,
    end_time,
    images,
    level,
    max_people,
    start_date,
    start_time,
    title,
    tutorial_role,
  } = tutorialData;
  const handleDelete = (tutorialId) => {
    deleteTutorial(tutorialId);
  };
  const [showEdit, setShowEdit] = useState(false);

  return (
    <div className="tutorial-component">
      <img src={images} alt={title} />
      <div className="tutorial-complex-data">
        <p>Start date: {start_date}</p>
        <p>End date: {end_date}</p>
        <p>day/s: {days} </p>
        <p>
          Time:{start_time}-{end_time}
        </p>
        <p>amount: 0/{max_people}</p>
        <p>level: {level}</p>
      </div>
      <div className="inner-info-content">
        <h1 id="tutorial-name">{title}</h1>
        <p id="canal-name">UserNew</p>
        <div className="bottom-tutorial-components">
          <div className="bottom-totalhour-likes">
            <p>12 h video</p>
            <p>13 Likes</p>
          </div>
          {tutorial_role === "student" ? (
            <ButtonTemplateDelete
              someFunction={handleDelete}
              param={index}
              textButton={"resign"}
              style={"yellow"}
            />
          ) : (
            <>
              <ButtonTemplateEdit
                someFunction={setShowEdit}
                param={showEdit}
                textButton={"edit"}
                style={"yellow"}
              />
              <ButtonTemplateDelete
                someFunction={handleDelete}
                param={index}
                textButton={"delete"}
                style={"red"}
              />
            </>
          )}
        </div>
      </div>

      {showEdit && (
        <div className="edit-content">
          <Edit
            data={tutorialData}
            index={index}
            showEdit={showEdit}
            setShowEdit={setShowEdit}
          ></Edit>
        </div>
      )}
    </div>
  );
};
