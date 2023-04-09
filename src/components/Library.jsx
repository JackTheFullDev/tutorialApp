import { useContext } from "react"
import { HomeContext } from "./feature/HomeContext";

import "./Library.css";

export const  Library =() =>
{
    const {tutorialData,removeFromLibrary} = useContext(HomeContext);
    
    return (
        <section className="home-section">
        <div className="home-content">
        <p>Content you signed up for </p>
          <div className="grid-with-home-content">
            {tutorialData.map((data, index) => {
                return (
                  <div className="tutorial-component" key={index}>
                    <img src={data._image} alt={data._tutorialName} />
                    <div className="tutorial-complex-data">
                      <p>Start date: {data._date.startDate}</p>
                      <p>End date: {data._date.endDate}</p>
                      <p>day/s: {data._days.join("-")} </p>
                      <p>
                        amount: {data._amount}/{data._maxAmount}
                      </p>
                      <p>level: {data._level}</p>
                    </div>
                    <div className="inner-info-content">
                      <h1 id="tutorial-name">{data._tutorialName}</h1>
                      <p id="canal-name">{data._canalName}</p>
                      <div className="bottom-tutorial-components">
                        <div className="bottom-totalhour-likes">
                          <p>h video</p>
                          <p>Likes</p>
                        </div>
                        <button style={{color:"yellow"}} onClick={()=>(removeFromLibrary(data))}>Resign</button>
                      </div>
                    </div>
                  </div>
                 
                );
              })}
               
          </div>
          <p>Content you created</p>
        </div>
        
      </section>
    )
}

export default Library;