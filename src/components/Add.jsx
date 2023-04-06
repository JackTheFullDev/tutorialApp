import { MdWidthFull } from "react-icons/md";
import "./Add.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";


export const Add = () => {
 

  const handleLevelValue = (event,newLevelValue) =>
  {
    setLevelState(newLevelValue);
  
  }

  const [levelState,setLevelState]=useState(0);
  const iconStyle = { color: "white", fontSize: "10em" };
  return (
    <section className="add-section">
      <div className="left-add-section">
        <h1>
          Create <span>New</span> Tutorial
        </h1>
        <div className="label-input-add-section">
          <p className="info-small-label">Tutorial Name</p>
          <input type="text" placeholder="Name..." />
        </div>
        <div className="date-add-section">
          <div>
            <p className="info-small-label">Start Date</p>
            <input type="date" />
          </div>
          <div>
            <p className="info-small-label">End Date</p>
            <input type="date" />
          </div>
        </div>
        <div className="time-add-section">
          <div>
            <p className="info-small-label">Start time</p>
            <input type="time" />
          </div>
          <div>
            <p className="info-small-label">End time</p>
            <input type="time" />
          </div>
        </div>
        <h2>
          Select a <span>day</span> of the week
        </h2>
        <div className="dayOfTheWeek-add-section">
          <div className="checkboxes-add-section">
            <div className="checkboxes-inner-content-add-section">
              <input className="checkbox-input-add-section" type="checkbox" />
              <p>Monday</p>
            </div>
            <div className="checkboxes-inner-content-add-section">
              <input className="checkbox-input-add-section" type="checkbox" />
              <p>Tuesday</p>
            </div>
            <div className="checkboxes-inner-content-add-section">
              <input className="checkbox-input-add-section" type="checkbox" />
              <p>Wednesday</p>
            </div>
            <div className="checkboxes-inner-content-add-section">
              <input className="checkbox-input-add-section" type="checkbox" />
              <p>Thursday</p>
            </div>
            <div className="checkboxes-inner-content-add-section">
              <input className="checkbox-input-add-section" type="checkbox" />
              <p>Friday</p>
            </div>
            <div className="checkboxes-inner-content-add-section">
              <input className="checkbox-input-add-section" type="checkbox" />
              <p>Saturday</p>
            </div>
          </div>

          <h2>
            <span>Enter</span> Location
          </h2>
          <div className="label-input-add-section">
            <p className="info-small-label">Location Name</p>
            <input type="text" placeholder="Name..." />
          </div>
          <h3>
            Choose your <span>training</span> level
          </h3>
        </div>
        <div className="level-slider-add-section">
          <div className="levels-content-add-section">
            <p className={levelState===0?"active":null}>Entry</p>
            <p className={levelState===1?"active":null}>Begginer</p>
            <p className={levelState===2?"active":null}>Junior</p>
            <p className={levelState===3?"active":null}>Advanced</p>
            <p className={levelState===4?"active":null}>Master</p>
          </div>
        
          <Box sx={{
           width: 360
           }}
           >
          <Slider
            aria-label="big steps"
            defaultValue={0}
            step={1}
            marks
            min={0}
            max={4}
            color="secondary"
            onChange={handleLevelValue}
            value={levelState}
          />
          
        </Box>

        </div>
        <div className="create-trening-button-add-section">
          <button className="add-section-button"> Create Trening</button>
        </div>
      </div>
      <div className="right-add-section">
        <div className="right-content-add-section">
          <div className="upload-image-content-add-section">
            <AiOutlineUpload style={iconStyle} />
          </div>
          <button className="add-section-button">Upload Img</button>
        </div>
      </div>
    </section>
  );
};

export default Add;
