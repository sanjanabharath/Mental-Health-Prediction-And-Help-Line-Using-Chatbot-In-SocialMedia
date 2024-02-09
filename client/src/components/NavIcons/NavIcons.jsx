import React from "react";

import Home from "../../img/home.png";
import Noti from "../../img/noti.png";
import Comment from "../../img/comment.png";
import Web from "./Web";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="navIcons">
      <Link to="../home">
        <img src={Home} alt="" />
      </Link>
      <img src={Noti} alt="" />
      <Link to="../chat">
        <img src={Comment} alt="" />
      </Link>
      <Web />
    </div>
  );
};

export default NavIcons;
