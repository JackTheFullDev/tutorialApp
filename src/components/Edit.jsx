import "./Add.css";
import "./style/EditCourse.css";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useContext } from "react";
import { useState } from "react";
import { addContext } from "./feature/AddContext";
import { ImagePicker } from "./template/ImagePicker";
import { LevelPicker } from "./template/LevelPicker";
import { DayPicker } from "./template/DayPicker";
import { InfoSmallLabel } from "./template/InfoSmallLabel";
import { userContext } from "./feature/UserContext";

export const Edit = ({ data: oldData, index, setShowEdit, showEdit }) => {
  const handleLevelValue = (event) => {
    const levels = ["Entry", "Beginner", "Junior", "Advanced", "Master"];
    const currentLevel = event.target.value;
    setLevelState(currentLevel);
    setTutorialLevel(levels[currentLevel]);
  }; // IMPORTANT TO DISPLAY LEVEL IN EDIT SECTION
  // console.log(oldData)
  const {end_date,end_time,images,level,max_people,start_date,start_time,title,days}=oldData;
  const [tutorialname, setTutorialName] = useState(title);
  const [tutorialStartDate, setTutorialStartDate] = useState(
    start_date
  );
  const [tutorialEndDate, setTutorialEndDate] = useState(
    end_date
  );
  const [tutorialStartTime, setTutorialStartTime] = useState(
    start_time
  );
  const [tutorialEndTime, setTutorialEndTime] = useState(
    end_time
  );
  const [tutorialDays, setTutorialDays] = useState(days);
  const [tutorialNumberOfPeople, setTutorialNumberOfPeople] = useState(
    max_people
  );
  const [tutorialLevel, setTutorialLevel] = useState(level);
  //image
  const [selectedImage, setSelectedImage] = useState(images);
  const fileSelectedHandler = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      selectedImage === oldData.selectedImage
        ? setSelectedImage(reader.result)
        : oldData.selectedImage;
    };
    reader.readAsDataURL(file);
    //end of file
  };

  const { addToLibrary, editAddedCourse } = useContext(addContext);
  const {editTutorial,user}=useContext(userContext);
 const{id} = user || null
 const tutorialRole="user";
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
      id,
      tutorialRole,
      index
    };
    
   // editAddedCourse(index, tutorialObject);
    editTutorial(index,tutorialObject)
    console.log(id)
    //here fetch update

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
  const [levelState, setLevelState] = useState(oldData.levelState);
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
    <section className="edit-section">
      <button
        className="close-edit-section-button"
        onClick={() => setShowEdit(!showEdit)}
      >
        Close
      </button>
      <form onSubmit={handleSubmit}>
        <div className="left-add-section">
          <h1>
            Edit <span style={{ color: "#57F049" }}>Your</span> Tutorial
          </h1>

          <InfoSmallLabel
            className={"label-input-add-section"}
            infoText={"Tutorial Name"}
            value={tutorialname}
            setData={setTutorialName}
            inputType={"text"}
          />

          <div className="date-add-section">
            <InfoSmallLabel
              className={""}
              infoText={"Start Date"}
              value={tutorialStartDate}
              setData={setTutorialStartDate}
              inputType={"date"}
            />
            <InfoSmallLabel
              className={""}
              infoText={"End Date"}
              value={tutorialEndDate}
              setData={setTutorialEndDate}
              inputType={"date"}
            />
          </div>
          <div className="time-add-section">
            <InfoSmallLabel
              className={""}
              infoText={"Start time"}
              value={tutorialStartTime}
              setData={setTutorialStartTime}
              inputType={"time"}
            />
            <InfoSmallLabel
              className={""}
              infoText={"End time"}
              value={tutorialEndTime}
              setData={setTutorialEndTime}
              inputType={"time"}
            />
          </div>
          <h2>
            Select a <span style={{ color: "#57F049" }}>day</span> of the week
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
              Update
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

export default Edit;
