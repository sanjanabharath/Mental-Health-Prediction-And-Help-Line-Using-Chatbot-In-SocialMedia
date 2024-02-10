import React from "react";
import Logo from "../../img/logo.png";
import { TbBrandNextjs } from "react-icons/tb";
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'
const LogoSearch = () => {
  return (
    <div className="LogoSearch">
      <TbBrandNextjs style={{color:"linear-gradient(to right, #2193b0, #6dd5ed)"}}/>
      <div className="Search">
          <input type="text" placeholder="#Explore"/>
          <div className="s-icon">
                <UilSearch/>
          </div>
      </div>
    </div>
  );
};

export default LogoSearch;
