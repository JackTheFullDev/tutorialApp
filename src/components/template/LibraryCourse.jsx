import { useContext } from "react";
import { HomeContext } from "../feature/HomeContext";


export const LibraryCourse = (tutorialCourseData) => {
 
 const { addToLibrary,removeFromLibrary } = useContext(HomeContext);
  const data = tutorialCourseData.data;
  console.log(data);

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
            <p>12 h video</p>
            <p>13 Likes</p>
          </div>
          <button
            onClick={() => {
              removeFromLibrary(data);
            }}
          >
            Resign
          </button>
        </div>
      </div>
    </div>
  );
};
