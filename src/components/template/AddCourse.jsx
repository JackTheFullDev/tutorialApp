export const AddCourse = ({addData,deleteFunction}) =>
{
  const data=addData._addTutorialData;
  console.log(data)
  return(
    <div className="tutorial-component">
      <img src={data.selectedImage} alt={data.tutorialname} />
      <div className="tutorial-complex-data">
        <p>Start date: {data.tutorialStartDate}</p>
        <p>End date: {data.tutorialStartDate}</p>
        <p>day/s: {data.days} </p>
        <p>
          amount: 0/{data.tutorialNumberOfPeople}
        </p>
        <p>level: {data.tutorialLevel}</p>
      </div>
      <div className="inner-info-content">
        <h1 id="tutorial-name">{data.tutorialname}</h1>
        <p id="canal-name">UserNew</p>
        <div className="bottom-tutorial-components">
          <div className="bottom-totalhour-likes">
            <p>12 h video</p>
            <p>13 Likes</p>
          </div>
          <button
            onClick={()=>deleteFunction(data)}
          >
            Resign
          </button>
        </div>
      </div>
    </div>
  )
}