import { useState } from "react";
import { Link } from "react-router-dom";

import "../feature/Navigation.css";

export const NavigationLink=({icon,to,pageNr,page})=>
{
    const [currentPage, setCurrentPage] = useState(1);
    const handleCurrentPage = (_currentPageNumber) =>
  {
    setCurrentPage(_currentPageNumber);
    
  }

    return(
        <li>
        <div className="navigation-content">
        <Link to={to} onClick={()=>handleCurrentPage({pageNr})}>
          {icon}
          <p className={currentPage===1?"current-page":null}>{page}</p>
        </Link>
      </div> </li>
    )
}