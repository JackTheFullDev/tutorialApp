import '../style/EditCourse.css'
export const EditCourse = ({addTutorialData}) =>
{
    const handleEdit=(e)=>
    {
        console.log(e.target.value)
    }
    const oldValue=addTutorialData[0]._addTutorialData.tutorialname;
    console.log(oldValue)
    return (
        <section className="edit-section">
            <div>
                <p>tutorialName</p>
                <input value={oldValue} onChange={handleEdit}></input>
            </div>
        </section>
    )
}