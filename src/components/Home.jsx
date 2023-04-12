import "./Home.css";

import tutorialData from "../data.json";
import { useContext, useState } from "react";
import { HomeContext } from "./feature/HomeContext";
import { Warning } from "./feature/Warning";
import { Course } from "./template/Course";
import { SearchBar } from "./template/SearchBar";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const handleHomeInput = (event) => {
    const newValue = event.target.value.toLowerCase();
    setInputValue(newValue);
  };

  const { addToLibrary } = useContext(HomeContext);

  return (
    <section className="home-section">
      <div className="home-content">
        <SearchBar handleHomeInput={handleHomeInput}></SearchBar>
        <div className="grid-with-home-content">
          {tutorialData.video
            .filter((searchingValue) => {
              return (
                searchingValue.tutorialName
                  .toLocaleLowerCase()
                  .includes(inputValue) ||
                searchingValue.canalName.toLowerCase().includes(inputValue)
              );
            })
            .map((data, index) => {
              return <Course key={index} data={data}></Course>;
            })}
        </div>
      </div>
    </section>
  );
}

/*  <div className="tutorial-component" key={index}>
                  <img src={data.Image} alt={data.tutorialName} />
                  <div className="tutorial-complex-data">
                    <p>Start date: {data.date[0].startDate}</p>
                    <p>End date: {data.date[0].endDate}</p>
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
                      <button onClick={()=>{addToLibrary(data.tutorialName,data.date[0],data.days,data.amount,data.level,data.Image,data.canalName,data["max-amount"])}}>Register</button>
                    </div>
                  </div>
                  
                </div> */
export default Home;
