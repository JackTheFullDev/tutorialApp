import "./Home.css";
import { AiOutlineSearch } from "react-icons/ai";
import tutorialData from "../data.json";
import pythonImg from "/assets/python-tutorial.jpg";

function Home() {
 
  return (
    <section className="home-section">
      <div className="home-content">
        <div className="searchBar">
          <input className="searchbar-input" placeholder="search" />
          <AiOutlineSearch id="search-icon" />
        </div>
        <div className="grid-with-home-content">
        {tutorialData.video.map((data,index) => {
    return (
        <div className="tutorial-component" key={index}> 
             <img src={data.Image} alt={data.tutorialName} />
             <div className="tutorial-complex-data">
               <p>Start date: {data.startDate}</p>
               <p>End date: {data.endDate}</p>
               <p>day/s: {data.days.join("-")} </p>
               <p>amount: {data.amount}/{data["max-amount"]}</p>
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
