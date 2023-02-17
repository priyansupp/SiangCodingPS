import React from "react";
import "./aboutShop.css";

export const AboutShop = (props) => {
  return (
    <div>
      <hr />
      <div>
        <h1>Shop Description</h1>
        <article className="shopDetails">
          <p>{props.about}</p>
        </article>
      </div>
    </div>
  );
};
