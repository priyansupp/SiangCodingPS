import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";
import './starrating.css';


function Startrating({stars}) {
  
  
  const ratingst = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="icon" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="half-icon" />
        ) : (
          <AiOutlineStar className="icon" />
        )}
      </span>
    );
  });
  

  return <section>
     <div className="icon-style">
      {ratingst}
        </div>
  </section>; 
}


export default Startrating;
