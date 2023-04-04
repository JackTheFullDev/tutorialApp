
import { MdWidthFull } from "react-icons/md";
import  "./Add.css";

import { AiOutlineUpload } from "react-icons/ai";
export const Add = () =>
{
    const iconStyle = { color: "white", fontSize: "10em" };
    return(
        <section className="add-section">
          <div className="left-add-section">
          <h1>Create <span>New</span> Tutorial</h1>
          <div className="label-input-add-section">
            <p className="info-small-label">Tutorial Name</p>
            <input type="text" placeholder="Name..."/>
          </div>
          <div className="date-add-section">
            <div>
                <p  className="info-small-label">Start Date</p>
                <input type="date"/>
            </div>
            <div>
                <p className="info-small-label" >Start Date</p>
                <input type="date"/>
            </div>
          </div>
          <div className="time-add-section">
            <div>
                <p className="info-small-label">Start time</p>
                <input type="time"/>
            </div>
            <div>
                <p  className="info-small-label">End time</p>
                <input type="time"/>
            </div>
          </div>
            <div className="dayOfTheWeek-add-section">
                <div className="checkboxes-add-section">
                    <div className="checkboxes-inner-content-add-section">
                    <input type="checkbox"/>
                    <p>Monday</p>
                    </div>
                </div>
                <div className="checkboxes-add-section">
                    <div className="checkboxes-inner-content-add-section">
                    <input id="test-input" type="checkbox"/>
                    <p>Tuesday</p>
                    </div>
                </div><div className="checkboxes-add-section">
                    <div className="checkboxes-inner-content-add-section">
                    <input type="checkbox"/>
                    <p>Wednesday</p>
                    </div>
                </div><div className="checkboxes-add-section">
                    <div className="checkboxes-inner-content-add-section">
                    <input type="checkbox"/>
                    <p>Thursday</p>
                    </div>
                </div><div className="checkboxes-add-section">
                    <div className="checkboxes-inner-content-add-section">
                    <input type="checkbox"/>
                    <p>Friday</p>
                    </div>
                </div><div className="checkboxes-add-section">
                    <div className="checkboxes-inner-content-add-section">
                    <input type="checkbox"/>
                    <p>Saturday</p>
                    </div>
                </div>
                <h2><span>Enter</span> Location</h2>
                <div className="label-input-add-section">
                <p className="info-small-label">Location Name</p>
                <input type="text" placeholder="Name..."/>
                </div>
                <h3>Choose your <span>training</span> level</h3>

            </div>
            <div className="level-slider-add-section"> 
                <div className="levels-content-add-section">
                    <p>Entry</p>
                    <p>Begginer</p>
                    <p>Junior</p>
                    <p>Advanced</p>
                    <p>Master</p>
                </div>
                <input type="range"/>
            </div>

        <button> Create Trening</button>
          </div>
          <div className="right-add-section"> 

            <div className="right-content-add-section">
                <div className="upload-image-content-add-section">
                <AiOutlineUpload style={iconStyle} />
                </div>
                <button>Upload Img</button>
            </div>
          </div>
            
        </section>
    )
}

export default Add