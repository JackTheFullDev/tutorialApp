
import { Link } from "react-router-dom"
import { FaBeer } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import reactLogo from './../../assets/user.png';


import "./Navigation.css";
function Naviagation ()
{
  const iconStyle={ color: "white", fontSize: "1.5em"}
 
    return(
      <section className="naviagtion">
        
        <div className="user-navigation">
        <img id="user-profile-img" src={reactLogo}/>
        <p>Hi kuba</p>
        </div>
        <ul>
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
        </section>
    )
}
  
export default Naviagation()
