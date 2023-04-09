import './Warning.css'
export const Warning = () => 
{
 const pickedYes=()=>
 {
    console.log("yes");
 }
 const pickedNo=()=>
 {
    console.log("no");
 }
 
    return(
       <section className="warning-section">
        <h1>Are u sure to register</h1>
        <div className='warning-content'>
            <button  style={{background:"#1bd40a"}} onClick={pickedYes}>Yes</button>
            <button style={{background:"red"}}  onClick={pickedNo}>No</button>
        </div>
       </section>
    );
    
}