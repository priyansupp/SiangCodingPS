import React from "react";
import "./wrapper.css";
import { useState, useEffect } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";
import Startrating from "../starrating/Starrating";
import {IoMdCall} from "react-icons/io";

function Wrapper() {
  const [count, setcount] = useState(1);
  const [cartclicked, setclick] = useState(false);
  useEffect(() => {
    console.log({ count });
  }, [count, cartclicked]);

  const product = {
    _id: "1",
    title: "Nike Shoes",
    src: "https://tse4.mm.bing.net/th?id=OIP.7SeMY3g9G_4NuDeEHBz8DgHaE3&pid=Api&P=0",
    rating: 4.6,
    shopId: 45,
    offer: true,
    description:
      "   product dicription product product product product dicription product product product product dicription product product product product dicription product product product product dicription product product product",
    price: 1050,
  };
  const shop = {
    shopId: 45,
    shopName: "Market complex",
    shopImg:
      "https://tse3.mm.bing.net/th?id=OIP.e3TH6ANVwxhsBNa3IemsXwHaE8&pid=Api&P=0",
    ownerId: 456,
    rating: 4.2,
    shopAddress: "market complex iit guwahati",
    description:
      "shop description shop description shop description shop description shop description shop description shop description shop description shop description shop description shop description ",
    openingTime: "10:00 Am",
    closingTime: "10:00 pm",
    Area:"Khokha"
  };
  const owner = {
    ownerId: 456,
    name: "abc",
    img: "https://tse1.mm.bing.net/th?id=OIP.uaW6jfd_5PaCnztaMbfZBQHaE8&pid=Api&P=0",
    phoneNo: 1234567890,
    emailAddrees: "abc@gmail.com",
  };

  const addOrGoCart = !cartclicked ? (
    <button className="cart1" onClick={() => setclick(true)}>
      Add to cart
    </button>
  ) : (
    <button className="cart1">Go to cart</button>
  );
  const price = (!product.offer) ? (
    <div className="price">
      <span> ₹{product.price}</span>
    </div>
  ) : (
    <div>
      <div className="price-before-offer">
      <span className="price">₹{0.8*(product.price)} </span>
        <span>
          <del> ₹{product.price} </del>
        </span>
        
      </div>
      <div className="discount"> Discount 20% off</div>
      
    </div>
  );
  return (
    <section className="background">
      <div className="details" key={product._id}>
        <div className="big-img">
          <img src={product.src} alt="" />
        </div>

        <div className="box">
          <div className="title">
            <h2>{product.title}</h2>
          </div>
          <Startrating stars={product.rating} />
          <div className="remaining">{product.description}</div>
          
            {price}
          <div className="buttonsection">
            <span>Quantity </span>
            <div className="quantity">
              <span>
                <button
                  className="decreement"
                  onClick={() => {
                    count > 1 && !cartclicked
                      ? setcount(count - 1)
                      : setcount(count);
                  }}
                >
                  <GrSubtract />
                </button>
              </span>
              <span className="count">
                {count}
              </span>

              <span>
                <button
                  className="increament"
                  onClick={() => {
                    !cartclicked ? setcount(count + 1) : setcount(count);
                  }}
                >
                  <GrAdd />
                </button>
              </span>
            </div>
          
          </div>
          
        
          <div className="buy-now">
            <button className="cart">Buy Now</button>
            {addOrGoCart}
         
          
          </div>
          
        </div>
      </div>
      <div>
        <div className="shop-detail" key={shop.shopId}>
          <div>
            
            <div className="big-img">
              <img src={shop.shopImg} alt="" />
            </div>
            
          </div>
          <div className="owner-info">
           
            <div className="owner-imp-det">
              <div className="owner-img">
                <img src={owner.img} alt=""></img>
                <div className="shop-info">
              <div className="shop-title">
                {shop.shopName}
              </div>
              <Startrating stars={shop.rating} />
            </div>
              </div>
              <div className="owner-contact">
              <div className="owner-name">{owner.name}</div>

                
                <div>
                  <span><IoMdCall/> </span>
                  <span>{owner.phoneNo}</span>
                </div>
                <div>
                  <span>{owner.emailAddrees}</span>
                </div>
                <div className="shop-description"> {shop.description}</div>
              </div>
              <div>
                <span>Address : </span>
                <span>{shop.shopAddress}</span>
              </div>
              <div className="area">
                <span>{shop.Area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wrapper;
