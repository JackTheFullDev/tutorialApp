import { useState } from "react";

export const ThanksDiv=()=>
{
    const [isThanksShown, setIsThanksShown] = useState(true);

    const handleThanks = (state) => {
      const thanksDiv = document.querySelector(".thanks-div");
      setIsThanksShown(state);
      isThanksShown
        ? (thanksDiv.style.display = "flex")
        : (thanksDiv.style.display = "none");
    };
    return(
       <> <div className="thanks-div">
       <h1>Thanks to:</h1>
       <h3>Figma for design</h3>
       <h3>Pexels for assets</h3>
       <h3>Ing for project-idea</h3>
     </div>
     <div className="thanks-to">
       <button
         onMouseEnter={() => handleThanks(false)}
         onMouseLeave={() => handleThanks(true)}
       >
         ?
       </button>
     </div></>
    )
}