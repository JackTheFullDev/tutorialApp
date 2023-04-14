
export const LevelPicker = ({levelState})=>
    {
        return(
            <div className="levels-content-add-section">
              <p className={levelState === 0 ? "active" : null}>Entry</p>
              <p className={levelState === 1 ? "active" : null}>Begginer</p>
              <p className={levelState === 2 ? "active" : null}>Junior</p>
              <p className={levelState === 3 ? "active" : null}>Advanced</p>
              <p className={levelState === 4 ? "active" : null}>Master</p>
            </div>
        )
    }