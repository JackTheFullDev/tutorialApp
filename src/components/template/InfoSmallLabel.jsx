
export const InfoSmallLabel=({className,infoText,value,setData ,inputType})=>
{
    return(
        <div className={className}>
        <p className="info-small-label">{infoText}</p>
        <input
          type={inputType}
          placeholder="Name..."
          value={value}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
    )
}