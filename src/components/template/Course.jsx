import { useContext } from "react";
import { HomeContext } from "../feature/HomeContext";
import { ComplexDate } from "./ComplexDate";
import { userContext } from "../feature/UserContext";
import { Link } from "react-router-dom";

export const Course = (tutorialCourseData) => {
  const { addToLibrary } = useContext(HomeContext);
  const { user } = useContext(userContext);
  const data = tutorialCourseData.data;
  const { image, tutorialName, canalName, totalHour,maxAmount,days,date,amount,level} = data;

  const registerForCourse=()=>
  { // need to change in index.js everything make endpoint with the databelow
 
    let id=user?.id;
  
    let tutorial_role="student";
    let daysToString=days.join(",");
    const{startDate,endDate,startTime,endTime}=date;
    fetch("http://localhost:3000/tutorials/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tutorialName,
        startDate,
        endDate,
        startTime,
        endTime,
        daysToString,
        amount,
        maxAmount,
        level,
        image,
        id,
        tutorial_role,
      }),
       body: JSON.stringify({ tutorialName, startDate,endDate, startTime, endTime,daysToString,amount,maxAmount,level,image,id,tutorial_role}),
    })
      .then((response) => {
        console.log(response.data); // Handle the response as needed
      })
      .catch((error) => {
        console.error("Error creating tutorial:", error);
        // Handle the error as needed
      });
  }
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
                registerForCourse(
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
