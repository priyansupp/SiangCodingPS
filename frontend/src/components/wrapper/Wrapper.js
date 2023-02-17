import React from "react";
import "./wrapper.css";
import { useState, useEffect } from "react";
import { GrAdd, GrSubtract } from "react-icons/gr";
import Startrating from "../starrating/Starrating";
import { IoMdCall } from "react-icons/io";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import product_data from "../../database/products.json";
import shop_data from "../../database/shop.json";

function Wrapper() {
  const [count, setcount] = useState(1);
  const [cartclicked, setclick] = useState(false);
  useEffect(() => {
    console.log({ count });
  }, [count, cartclicked]);

  const addOrGoCart = !cartclicked ? (
    <button className="cart1" onClick={() => setclick(true)}>
      Add to cart
    </button>
  ) : (
    <button className="cart1">Go to cart</button>
  );
  const price = !product_data.products[0].offer ? (
    <div className="price">
      <span> ₹{product_data.products[0].price}</span>
    </div>
  ) : (
    <div>
      <div className="price-before-offer">
        <span className="price">₹{0.8 * product_data.products[0].price} </span>
        <span>
          <del> ₹{product_data.products[0].price} </del>
        </span>
      </div>
      <div className="discount"> Discount 20% off</div>
    </div>
  );
  return (
    <section className="background">
      <Navbar />
      <div className="details" key={product_data.products[0]._id}>
        <div className="big-img">
          <img src={product_data.products[0].src} alt="" />
        </div>

        <div className="box">
          <div className="title">
            <h2>{product_data.products[0].title}</h2>
          </div>
          <Startrating stars={product_data.products[0].rating} />
          <div className="remaining">
            {product_data.products[0].description}
          </div>

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
              <span className="count">{count}</span>

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
        <div className="shop-detail" key={shop_data.shopId}>
          <div>
            <div className="big-img">
              <img src={shop_data.shop[1].shopImg} alt="" />
            </div>
            <div className="shop-info">
              <div className="shop-title">{shop_data.shop[1].shopName}</div>
              <Startrating stars={shop_data.shop[1].rating} />
            </div>
          </div>
          <div className="owner-info">
            <div className="owner-imp-det">
              <div className="owner-img">
                <img src={shop_data.shop[1].owner.img} alt=""></img>
              </div>
              <div className="owner-contact">
                <div className="owner-name">{shop_data.shop[1].owner.name}</div>

                <div>
                  <span>
                    <IoMdCall />{" "}
                  </span>
                  <span>{shop_data.shop[1].owner.phoneNo}</span>
                </div>
                <div>
                  <span>{shop_data.shop[1].owner.emailAddrees}</span>
                </div>
              </div>
              <div className="shop-description-1">
                {" "}
                {shop_data.shop[1].description}
              </div>

              <div className="shop-Address">
                <span>Address : </span>
                <span>{shop_data.shop[1].shopAddress}</span>
              </div>
              <div className="area">
                <span>{shop_data.shop[1].Area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Wrapper;
