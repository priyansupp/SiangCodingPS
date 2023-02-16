import React from "react";
import Startrating from "../starrating/Starrating";
import { IoMdCall } from "react-icons/io";
import "../wrapper/wrapper.css";
 import Footer from "../footer/Footer";
 import Navbar from "../navbar/Navbar";
import shop_data from '../../database/shop.json';
import service_data from '../../database/services.json';


function ServiceWrapper() {
 
 
 
  const price = !service_data.service[0].offer ? (
    <div className="price">
      <span> ₹{service_data.service[0].price}</span>
    </div>
  ) : (
    <div>
      <div className="price-before-offer">
        <span className="price">₹{0.8 * service_data.service[0].price} </span>
        <span>
          <del> ₹{service_data.service[0].price} </del>
        </span>
      </div>
      <div className="discount"> Discount 20% off</div>
    </div>
  );
  return (
    <section>
      <Navbar/>
      <div className="details" key={service_data.service._id}>
        <div className="big-img">
          <img src={service_data.service[0].src} alt="" />
        </div>

        <div className="box">
          <div className="title">
            <h2>{service_data.service[0].title}</h2>
          </div>
          <Startrating stars={service_data.service[0].rating} />
          <div className="remaining">{service_data.service[0].description}</div>
          {price}
         
          <div className="buy-now">
            <button className="cart">Book Now</button>
          </div>
        </div>
      </div>
      <div>
        <div className="shop-detail" key={shop_data.shop[0].shopId}>
          <div>
            <div className="big-img">
              <img src={shop_data.shop[0].shopImg} alt="" />
            </div>
            <div className="shop-info">
                  <div className="shop-title">{shop_data.shop[0].shopName}</div>
                  <Startrating stars={shop_data.shop[0].rating} />
                </div>
          </div>
          <div className="owner-info">
            <div className="owner-imp-det">
              <div className="owner-img">
                <img src={shop_data.shop[0].owner.img} alt=""></img>
                
              </div>
              <div className="owner-contact">
                <div className="owner-name">{shop_data.shop[0].owner.name}</div>

                <div>
                  <span>
                    <IoMdCall />{" "}
                  </span>
                  <span>{shop_data.shop[0].owner.phoneNo}</span>
                </div>
                <div>
                  <span>{shop_data.shop[0].owner.emailAddrees}</span>
                </div>
              </div>
              <div className="shop-description-1"> {shop_data.shop[0].description}</div>
              <div>
                <span>Address : </span>
                <span>{shop_data.shop[0].shopAddress}</span>
              </div>
              <div className="area">
                <span>{shop_data.shop[0].Area}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  );
}

export default ServiceWrapper;
