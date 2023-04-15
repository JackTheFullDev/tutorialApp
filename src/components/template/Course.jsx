import { useContext } from "react";
import { HomeContext } from "../feature/HomeContext";


export const Course = (tutorialCourseData) => {
 
 const { addToLibrary } = useContext(HomeContext);
  const data = tutorialCourseData.data;
  return (
    <div className="tutorial-component">
      <img src={data.image} alt={data.tutorialName} />
      <div className="tutorial-complex-data">
        <p>Start date: {data.date.startDate}</p> 
        <p>End date: {data.date.endDate}</p>
        <p>day/s: {data.days.join("-")} </p>
        <p>
          amount: {data.amount}/{data["max-amount"]}
        </p>
        <p>level: {data.level}</p>
      </div>
      <div className="inner-info-content">
        <h1 id="tutorial-name">{data.tutorialName}</h1>
        <p id="canal-name">{data.canalName}</p>
        <div className="bottom-tutorial-components">
          <div className="bottom-totalhour-likes">
            <p>{data.totalHour}h video</p>
            <p>{data.totalHour}Likes</p>
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
                data["max-amount"]
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
