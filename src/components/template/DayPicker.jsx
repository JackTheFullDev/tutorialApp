
export const DayPicker=({day,handleCheckBox})=>
{
    
    return(
            <div className="checkboxes-inner-content-add-section">
                <input
                  className="checkbox-input-add-section"
                  type="checkbox"
                  value={day.name}
                  onChange={handleCheckBox}
                />
                <p>{day.name}</p>
              </div>
    );
}