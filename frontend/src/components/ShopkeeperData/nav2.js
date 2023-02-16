import React from "react";
import logo from "../../assets/footer/lenden.jpeg";
import "./nav2.css";

export const Nav2 = (props) => {
  return (
    <div className="nav2">
      <div className="logo">
        <img src={logo} alt="logo" className="logo_img"></img>
      </div>
      <div className="profileImage">
        <img className="avatar" src={props.profilePhoto} alt="Avatar" />
      </div>
    </div>
  );
};
