

export const ComplexDate=({data})=>

{
    const {image,tutorialName,date:{startDate},date:{endDate},date:{startTime},date:{endTime},days,amount,maxAmount,level}=data;
    return(
        <div className="tutorial-complex-data">
        <p>Start date: {startDate}</p>
        <p>End date: {endDate}</p>
        <p>day/s: {days.join("-")} </p>
        <p>
          Time:{startTime}-{endTime}
        </p>
        <p>amount: {amount}/{maxAmount}</p>
        <p>level: {level}</p>
      </div>
    )
}