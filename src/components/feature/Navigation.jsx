import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { CiLogout } from "react-icons/ci";
import { MdAppRegistration } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import reactLogo from "/assets/user.png";

import "./Navigation.css";
import { useContext, useState } from "react";
import { NavigationLink } from "../template/NavigationLink";
import { ThanksDiv } from "../template/thanksDiv";
import { userContext } from "./UserContext";
export const Navigation = () => {
  const iconStyle = { color: "white", fontSize: "1.5em" }; 
  
  const [currentPage, setCurrentPage] = useState(1);
 
  const {user,handleLogOut} =
  useContext(userContext);

  console.log(user,)
  return (
    <section className="navigation">
      <div className="user-navigation">
        <img id="user-profile-img" src={reactLogo} />
       {user&& <p id="user-name">Hi {user.username}</p>}
      </div>
      <ul>
        <NavigationLink
          to={"/"}
          icon={<AiFillHome style={iconStyle} />}
          pageNr={1}
          page={"home"}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

        <NavigationLink
          to={"/library"}
          icon={<MdVideoLibrary style={iconStyle} />}
          pageNr={2}
          page={"library"}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />

        <NavigationLink
          to={"/add"}
          icon={<IoAdd style={iconStyle} />}
          pageNr={3}
          page={"add"}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        {user?<li>
          <div className="navigation-content" style={{display:"flex", alignItems:"center",justifyContent:"center" ,paddingRight:"40px",gap:"10px",cursor:"pointer"}}>
        <CiLogout style={{fontSize:"25px"}}/>
        <button style={{border:"none",backgroundColor:"transparent",color:"white"}} onClick={()=>handleLogOut()}>logout</button>
        </div>
        </li>:
        <>
         <NavigationLink
          to={"/login"}
          icon={<FiLogIn style={iconStyle} />}
          pageNr={4}
          page={"login"}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />  
        <NavigationLink
          to={"/registration"}
          icon={<MdAppRegistration style={iconStyle} />}
          pageNr={5}
          page={"registration"}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        </>}
        
      </ul>
      <ThanksDiv />
    </section>
  );
};

export default Navigation;
