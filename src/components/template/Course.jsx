import { useContext } from "react";
import { HomeContext } from "../feature/HomeContext";
import { ComplexDate } from "./ComplexDate";
import { userContext } from "../feature/UserContext";
import { Link } from "react-router-dom";

export const Course = (tutorialCourseData) => {
  const { addToLibrary } = useContext(HomeContext);
  const { user } = useContext(userContext);
  const data = tutorialCourseData.data;
  const { image, tutorialName, canalName, totalHour } = data;

  return (
    <div className="tutorial-component">
      <img src={image} alt={tutorialName} />
      <ComplexDate data={data}></ComplexDate>
      <div className="inner-info-content">
        <h1 id="tutorial-name">{tutorialName}</h1>
        <p id="canal-name">{canalName}</p>
        <div className="bottom-tutorial-components">
          <div className="bottom-totalhour-likes">
            <p>{totalHour}h video</p>
            <p>{totalHour}Likes</p>
          </div>
          {user ? (
            <button
              onClick={() => {
                addToLibrary(
                  data.tutorialName,
                  data.date,
                  data.days,
                  data.amount,
                  data.level,
                  data.image,
                  data.canalName,
                  data.maxAmount
                );
              }}
            >
              Register
            </button>
          ) : (
            <Link to={"/login"} style={{ color: "#48CB3D" ,fontSize:"18px"}}>
              Login first
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
