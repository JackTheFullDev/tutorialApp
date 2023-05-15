import { useContext } from "react";
import { HomeContext } from "../feature/HomeContext";
import { ComplexDate } from "./ComplexDate";

export const Course = (tutorialCourseData) => {
  const { addToLibrary } = useContext(HomeContext);
  const data = tutorialCourseData.data;
  const {image,tutorialName,canalName,totalHour}=data;
  
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
        </div>
      </div>
    </div>
  );
};
