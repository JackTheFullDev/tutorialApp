
import { Link } from "react-router-dom"
import { FaBeer } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

import "./Navigation.css";
function Naviagation ()
{
  const iconStyle={ color: "white", fontSize: "1.5em"}
    return(
        <ul className="naviagtion">
          <li >
            <div className="naviagation-content">
            <AiFillHome style={iconStyle}/>
              <div>
                <Link to="/">Home</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="naviagation-content">
            <MdVideoLibrary style={iconStyle}/>
              <div>
                <Link to="/">Library</Link>
              </div>
            </div>
          </li>
          <li>
            <div className="naviagation-content">
            <IoAdd style={iconStyle}/>
              <div>
                <Link to="/">Add</Link>
              </div>
            </div>
          </li>
        </ul>
        
    )
}
  
export default Naviagation()
