import { MdWidthFull } from "react-icons/md";
import "./Add.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import { AiOutlineUpload } from "react-icons/ai";
export const Add = () => {
  function valuetext(value) {
    return `${value}°C`;
  }

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
            <p>Entry</p>
            <p>Begginer</p>
            <p>Junior</p>
            <p>Advanced</p>
            <p>Master</p>
          </div>
          <input type="range" min="0" max="4" step="1" />
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
        <Box sx={{
           width: 300
           }}
           >
          <Slider
            aria-label="big steps"
            defaultValue={0}
            getAriaValueText={valuetext}
            step={1}
            marks
            min={0}
            max={4}
            color="secondary"
          />
          
        </Box>
      </div>
    </section>
  );
};

export default Add;
