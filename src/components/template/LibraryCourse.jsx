


export const LibraryCourse = ({data,courseFunction}) => {
 


  return (
    <div className="tutorial-component">
      <img src={data.image} alt={data.tutorialName} />
      <div className="tutorial-complex-data">
        <p>Start date: {data.date.startDate}</p>
        <p>End date: {data.date.endDate}</p>
        <p>day/s: {data.days.join("-")} </p>
        <p>Time:{data.date.startTime}-{data.date.endTime}</p>
        <p>
          amount: {data.amount}/{data.maxAmount}
        </p>
        <p>level: {data.level}</p>
      </div>
      <div className="inner-info-content">
        <h1 id="tutorial-name">{data.tutorialName}</h1>
        <p id="canal-name">{data.canalName}</p>
        <div className="bottom-tutorial-components">
          <div className="bottom-totalhour-likes">
            <p>12 h video</p>
            <p>13 Likes</p>
          </div>
          <button
            onClick={()=>courseFunction(data)} style={{color:"yellow"}}
          >
            Resign
          </button>
        </div>
      </div>
    </div>
  );
};
