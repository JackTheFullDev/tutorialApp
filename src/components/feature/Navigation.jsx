
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
          <li>
            <div className="naviagation-content">
                <Link to="/">
                <AiFillHome style={iconStyle}/>
                <p>Home</p>
                </Link>
            </div>
          </li>
          <li>
            <div className="naviagation-content">
            <Link to="/">
                <MdVideoLibrary style={iconStyle}/>
                <p>Library</p>
                </Link>
            </div>
          </li>
          <li>
            <div className="naviagation-content">
            <Link to="/">
                <IoAdd style={iconStyle}/>
                <p>Add</p>
                </Link>
            </div>
          </li>
        </ul>
        <div className="thanks-div">
            <h1>thanks to:</h1>
            <h3>Figma for design</h3>
            <h3>freePic for assets</h3>
            <h3>Ing for idea for project</h3>
            
          </div>
        <div className="thanks-to">
          <button>?</button>
        </div>
        </section>
    )
}
  
export default Naviagation()
