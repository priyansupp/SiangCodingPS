import React from "react";
import "./shopkeeper.css";

export const Shopkeeper = (props) => {
  return (
    <div className="shopkeeper">
      <img className="shopPhoto" src={props.shopPhoto} alt="Shop" />
      <ul>
        <li>Name: {props.name}</li>
        <li>Shop Name: {props.shopName}</li>
        <li>Contact: {props.contact}</li>
        <li>Email: {props.email}</li>
      </ul>
    </div>
  );
};
