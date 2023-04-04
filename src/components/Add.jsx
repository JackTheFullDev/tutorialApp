
import  "./Add.css";

export const Add = () =>
{

    return(
        <section className="add-section">
          <div className="left-add-section">
          <h1>Create <span>New</span> Tutorial</h1>
          <div className="label-input-add-section">
            <p>Tutorial Name</p>
            <input type="text" placeholder="Name..."/>
          </div>
          <div className="date-add-section">
            <div>
                <p>Start Date</p>
                <input type="date"/>
            </div>
            <div>
                <p>Start Date</p>
                <input type="date"/>
            </div>
          </div>
          <div className="time-add-section">
            <div>
                <p>Start time</p>
                <input type="time"/>
            </div>
            <div>
                <p>End time</p>
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
                <h2><span>Enter</span>Location</h2>
                <div className="label-input-add-section">
                <p>Location Name</p>
                <input type="text" placeholder="Name..."/>
                </div>
                <h3>Choose your <span>training</span>level</h3>

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
          </div>
            
        </section>
    )
}

export default Add