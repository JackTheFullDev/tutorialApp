

export const ButtonTemplateEdit=({someFunction ,textButton,param,style})=>
{
    return(
        <button onClick={()=>someFunction(!param)} style={{color:style}}>{textButton}</button>
    )
}