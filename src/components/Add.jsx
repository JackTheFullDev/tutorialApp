import { MdWidthFull } from "react-icons/md";
import "./Add.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { AiOutlineUpload } from "react-icons/ai";
import { useState } from "react";
import { Form } from "react-router-dom";
import { addContext } from "./feature/AddContext";

import { ImagePicker } from "./template/ImagePicker";
import uploadImg from "../../public/assets/upload.png";
import { LevelPicker } from "./template/LevelPicker";
import { DayPicker } from "./template/DayPicker";

export const Add = () => {
  const handleLevelValue = (event) => {
    const levels = ["Entry", "Beginner", "Junior", "Advanced", "Master"];
    const currentLevel = event.target.value;
    setLevelState(currentLevel);
    setTutorialLevel(levels[currentLevel]);
  };
  const [tutorialname, setTutorialName] = useState("");
  const [tutorialStartDate, setTutorialStartDate] = useState("");
  const [tutorialEndDate, setTutorialEndDate] = useState("");
  const [tutorialStartTime, setTutorialStartTime] = useState("");
  const [tutorialEndTime, setTutorialEndTime] = useState("");
  const [tutorialDays, setTutorialDays] = useState([]);
  const [tutorialNumberOfPeople, setTutorialNumberOfPeople] = useState(0);
  const [tutorialLevel, setTutorialLevel] = useState(0);
  //image
  const [selectedImage, setSelectedImage] = useState("");
  const fileSelectedHandler = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
    //end of file
  };

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
      selectedImage,
    };
    addToLibrary(tutorialObject);
  };
  const handleCheckBox = (event) => {
    const valueOfCheckbox = event.target.value;
    event.target.checked
      ? setTutorialDays([...tutorialDays, valueOfCheckbox])
      : setTutorialDays(
          tutorialDays.filter((item) => item !== valueOfCheckbox)
        );
  };
  //uploadImageContent
  const [levelState, setLevelState] = useState(0);
  const dayOfWeek = [
    {
      id: 1,
      name: "Monday",
    },
    {
      id: 2,
      name: "Tuesday",
    },
    {
      id: 3,
      name: "Wednesday",
    },
    {
      id: 4,
      name: "Thursday",
    },
    {
      id: 5,
      name: "Friday",
    },
    {
      id: 6,
      name: "Saturday",
    },
  ];
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
              <DayPicker
                day={dayOfWeek[0]}
                handleCheckBox={handleCheckBox}
              ></DayPicker>
             
              <DayPicker
                day={dayOfWeek[1]}
                handleCheckBox={handleCheckBox}
              ></DayPicker>
              <DayPicker
                day={dayOfWeek[2]}
                handleCheckBox={handleCheckBox}
              ></DayPicker>
              <DayPicker
                day={dayOfWeek[3]}
                handleCheckBox={handleCheckBox}
              ></DayPicker>
              <DayPicker
                day={dayOfWeek[4]}
                handleCheckBox={handleCheckBox}
              ></DayPicker>
              <DayPicker
                day={dayOfWeek[5]}
                handleCheckBox={handleCheckBox}
              ></DayPicker>
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
            <LevelPicker levelState={levelState} />

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
              onClick={(e) => {
                handleSubmit;
              }}
            >
              Create Trening
            </button>
          </div>
        </div>
        <div className="right-add-section">
          <div className="right-content-add-section">
            <div className="image-container">
              <img className="tutorial-image" src={selectedImage} />
            </div>
            <ImagePicker
              fileSelectedHandler={fileSelectedHandler}
            ></ImagePicker>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Add;
