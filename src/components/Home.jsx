import "./Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import tutorialData from "../data.json";
import pythonImg from "../assets/python-tutorial.jpg";
import htmlImg from "../assets/html-tutorial.jpg";
import cyberImg from "../assets/cyber-tutorial.jpg";

function Home() {
  console.log(tutorialData.video[0]);
  const videoTest = tutorialData.video[0];
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="searchBar">
          <input className="searchbar-input" placeholder="search" />
          <AiOutlineSearch id="search-icon" />
        </div>
        <div className="grid-with-home-content">
          {tutorialData.video.map((data) => {
            {console.log(data.tutorialName)}
            <div className="tutorial-component">
              <img src={pythonImg} />
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
            </div>;
          })}
        </div>
      </div>
    </section>
  );
}

export default Home;
