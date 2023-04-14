import "./Home.css";
import tutorialData from "../data.json";
import { useState } from "react";
import { Warning } from "./feature/Warning";
import { Course } from "./template/Course";
import { SearchBar } from "./template/SearchBar";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const handleHomeInput = (event) => {
    const newValue = event.target.value.toLowerCase();
    setInputValue(newValue);
  };

  console.log(tutorialData.video);

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
              return <Course key={index} data={data} ></Course>;
            })}
        </div>
      </div>
    </section>
  );
}
export default Home;
