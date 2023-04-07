import "./Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import tutorialData from "../data.json";
import pythonImg from "/assets/python-tutorial.jpg";
import { useState } from "react";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const handleHomeInput = (event) => {
    const newValue = event.target.value.toLowerCase();
    setInputValue(newValue);
  };
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="searchBar">
          <input
            className="searchbar-input"
            placeholder="search"
            onChange={handleHomeInput}
          />
          <AiOutlineSearch id="search-icon" />
        </div>
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
              return (
                <div className="tutorial-component" key={index}>
                  <img src={data.Image} alt={data.tutorialName} />
                  <div className="tutorial-complex-data">
                    <p>Start date: {data.startDate}</p>
                    <p>End date: {data.endDate}</p>
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
                      <button>Register</button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Home;
