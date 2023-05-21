import "./Home.css";
import tutorialData from "../data.json";
import { useEffect, useState } from "react";
import { Course } from "./template/Course";
import { SearchBar } from "./template/SearchBar";
import axios from "axios"

function Home() {
  const [inputValue, setInputValue] = useState("");
  const handleHomeInput = (event) => {
    const newValue = event.target.value.toLowerCase();
    setInputValue(newValue);
  };

  useEffect(()=>
  {
    const fetchUsers=async()=>
    {
      try{
        const res=await  axios.get("http://localhost:3000/users");
        console.log(res)
      }
      catch(err)
      {
        console.log(err)
      }
    }
    fetchUsers()
  },[])
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
export default Home;
