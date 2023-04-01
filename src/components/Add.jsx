import { useState } from "react"
import  "./Add.css";

export const Add = () =>
{

    const [test,setTest] =useState(0)
    return(
        <section className="add-section">
            <p>{test}</p>
            <button onClick={() =>setTest(test + 1)}>click</button>
        </section>
    )
}

export default Add