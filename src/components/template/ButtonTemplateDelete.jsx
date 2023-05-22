

export const ButtonTemplateDelete=({someFunction ,textButton,param,style})=>
{
    return(
        <button onClick={()=>someFunction(param)} style={{color:style}}>{textButton}</button>
    )
}