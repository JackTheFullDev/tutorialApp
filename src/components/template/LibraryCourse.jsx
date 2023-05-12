import { ComplexDate } from "./ComplexDate";



export const LibraryCourse = ({data,courseFunction}) => {
 
//console.log(data)

const {tutorialName,image,canalName}=data;

console.log(data)

  return (
    <div className="tutorial-component">
      <img src={image} alt={tutorialName} />
      <ComplexDate data={data}></ComplexDate>
      <div className="inner-info-content">
        <h1 id="tutorial-name">{tutorialName}</h1>
        <p id="canal-name">{canalName}</p>
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
