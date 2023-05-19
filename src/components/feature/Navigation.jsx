import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import reactLogo from "/assets/user.png";

import "./Navigation.css";
import { useState } from "react";
import { NavigationLink } from "../template/NavigationLink";
import { ThanksDiv } from "../template/thanksDiv";
export const Navigation = () => {
  const iconStyle = { color: "white", fontSize: "1.5em" }; 
  
  const [currentPage, setCurrentPage] = useState(1);
 
  return (
    <section className="navigation">
      <div className="user-navigation">
        <img id="user-profile-img" src={reactLogo} />
        <p id="user-name">Hi kuba</p>
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
      </ul>
      <ThanksDiv />
    </section>
  );
};

export default Navigation;
