import { MdWidthFull } from "react-icons/md";
import "./Add.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";
import { Form } from "react-router-dom";
import { addContext } from "./feature/AddContext";

export const Add = () => {
  const handleLevelValue = (event) => {
    const levels = ["Entry", "Beginner", "Junior", "Advanced", "Master"];
    const currentLevel=event.target.value;
    setLevelState(currentLevel);
    setTutorialLevel(levels[currentLevel]);
    console.log(levels[currentLevel]);
  };
  const [tutorialname, setTutorialName] = useState("");
  const [tutorialStartDate, setTutorialStartDate] = useState("");
  const [tutorialEndDate, setTutorialEndDate] = useState("");
  const [tutorialStartTime, setTutorialStartTime] = useState("");
  const [tutorialEndTime, setTutorialEndTime] = useState("");
  const [tutorialDays, setTutorialDays] = useState([]);
  const [tutorialNumberOfPeople, setTutorialNumberOfPeople] = useState(0);
  const [tutorialLevel, setTutorialLevel] = useState(0);

  const { addToLibrary } = useContext(addContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tutorialObject = {
      tutorialname,
      tutorialStartDate,
      tutorialEndDate,
      tutorialStartTime,
      tutorialEndTime,
      tutorialDays,
      tutorialNumberOfPeople,
      tutorialLevel,
    };
    console.log(tutorialObject);
    addToLibrary(tutorialObject);
  };
  const handleCheckBox = (event) => {
    const valueOfCheckbox = event.target.value;
    event.target.checked
      ? setTutorialDays([...tutorialDays, valueOfCheckbox])
      : setTutorialDays(
          tutorialDays.filter((item) => item !== valueOfCheckbox)
        );
    console.log(tutorialDays);
  };

  const [levelState, setLevelState] = useState(0);
  const iconStyle = { color: "white", fontSize: "10em" };
  return (
    <section className="add-section">
      <form onSubmit={handleSubmit}>
        <div className="left-add-section">
          <h1>
            Create <span>New</span> Tutorial
          </h1>
          <div className="label-input-add-section">
            <p className="info-small-label">Tutorial Name</p>
            <input
              type="text"
              placeholder="Name..."
              value={tutorialname}
              onChange={(e) => setTutorialName(e.target.value)}
            />
          </div>
          <div className="date-add-section">
            <div>
              <p className="info-small-label">Start Date</p>
              <input
                type="date"
                value={tutorialStartDate}
                onChange={(e) => setTutorialStartDate(e.target.value)}
              />
            </div>
            <div>
              <p className="info-small-label">End Date</p>
              <input
                type="date"
                value={tutorialEndDate}
                onChange={(e) => setTutorialEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="time-add-section">
            <div>
              <p className="info-small-label">Start time</p>
              <input
                type="time"
                value={tutorialStartTime}
                onChange={(e) => setTutorialStartTime(e.target.value)}
              />
            </div>
            <div>
              <p className="info-small-label">End time</p>
              <input
                type="time"
                value={tutorialEndTime}
                onChange={(e) => setTutorialEndTime(e.target.value)}
              />
            </div>
          </div>
          <h2>
            Select a <span>day</span> of the week
          </h2>
          <div className="dayOfTheWeek-add-section">
            <div className="checkboxes-add-section">
              <div className="checkboxes-inner-content-add-section">
                <input
                  className="checkbox-input-add-section"
                  type="checkbox"
                  value={"Monday"}
                  onChange={handleCheckBox}
                />
                <p>Monday</p>
              </div>
              <div className="checkboxes-inner-content-add-section">
                <input
                  className="checkbox-input-add-section"
                  type="checkbox"
                  value={"Tuesday"}
                  onChange={handleCheckBox}
                />
                <p>Tuesday</p>
              </div>
              <div className="checkboxes-inner-content-add-section">
                <input
                  className="checkbox-input-add-section"
                  type="checkbox"
                  value={"Wednesday"}
                  onChange={handleCheckBox}
                />
                <p>Wednesday</p>
              </div>
              <div className="checkboxes-inner-content-add-section">
                <input
                  className="checkbox-input-add-section"
                  type="checkbox"
                  value={"Thursday"}
                  onChange={handleCheckBox}
                />
                <p>Thursday</p>
              </div>
              <div className="checkboxes-inner-content-add-section">
                <input
                  className="checkbox-input-add-section"
                  type="checkbox"
                  value={"Friday"}
                  onChange={handleCheckBox}
                />
                <p>Friday</p>
              </div>
              <div className="checkboxes-inner-content-add-section">
                <input
                  className="checkbox-input-add-section"
                  type="checkbox"
                  value={"Saturday"}
                  onChange={handleCheckBox}
                />
                <p>Saturday</p>
              </div>
            </div>

            <h2>
              <span>Number</span> of participants
            </h2>
            <div className="label-input-add-section">
              <p className="info-small-label">max-amount</p>
              <input
                type="number"
                placeholder="Number..."
                value={tutorialNumberOfPeople}
                onChange={(e) => setTutorialNumberOfPeople(e.target.value)}
              />
            </div>
            <h3>
              Choose your <span>training</span> level
            </h3>
          </div>
          <div className="level-slider-add-section">
            <div className="levels-content-add-section">
              <p className={levelState === 0 ? "active" : null}>Entry</p>
              <p className={levelState === 1 ? "active" : null}>Begginer</p>
              <p className={levelState === 2 ? "active" : null}>Junior</p>
              <p className={levelState === 3 ? "active" : null}>Advanced</p>
              <p className={levelState === 4 ? "active" : null}>Master</p>
            </div>

            <Box
              sx={{
                width: 360,
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
            <button
              className="add-section-button"
              type="submit"
              onClick={() => {}}
            >
              {" "}
              Create Trening
            </button>
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
      </form>
    </section>
  );
};

export default Add;
