import React from "react";
import Startrating from "../starrating/Starrating";
import { IoMdCall } from "react-icons/io";
import "../wrapper/wrapper.css";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";


function ServiceWrapper() {
 
  const service = {
    _id: "1",
    title: "Hair Cut",
    src: "https://tse3.mm.bing.net/th?id=OIP.bi2q7SEbVosrBt1C5rY8BAHaHa&pid=Api&P=0",
    rating: 3.8,
    shopId: 37,
    offer: false,
    description:
      "   service dicription service product service service dicription service product product product dicription product product product product dicription product product product product dicription product product product",
    price: 70,
  };
  const shop = {
    shopId: 37,
    shopName: "barber Shop",
    shopImg:
      "https://tse2.mm.bing.net/th?id=OIP.dLOSpNxV2jKGaY5EALzpkwHaE8&pid=Api&P=0",
    ownerId: 459,
    rating: 4.2,
    shopAddress: "khokha market near  iit guwahati",
    description:
      "shop description shop description shop description shop description shop description shop description shop description shop description shop description shop description shop description ",
    openingTime: "10:00 Am",
    closingTime: "10:00 pm",
    Area: "Khokha",
  };
  const owner = {
    ownerId: 459,
    name: "abc",
    img: "https://tse1.mm.bing.net/th?id=OIP.uaW6jfd_5PaCnztaMbfZBQHaE8&pid=Api&P=0",
    phoneNo: 1234567890,
    emailAddrees: "abc@gmail.com",
  };
  const price = !service.offer ? (
    <div className="price">
      <span> ₹{service.price}</span>
    </div>
  ) : (
    <div>
      <div className="price-before-offer">
        <span className="price">₹{0.8 * service.price} </span>
        <span>
          <del> ₹{service.price} </del>
        </span>
      </div>
      <div className="discount"> Discount 20% off</div>
    </div>
  );
  return (
    <section>
      <Navbar/>
      <div className="details" key={service._id}>
        <div className="big-img">
          <img src={service.src} alt="" />
        </div>

        <div className="box">
          <div className="title">
            <h2>{service.title}</h2>
          </div>
          <Startrating stars={service.rating} />
          <div className="remaining">{service.description}</div>
          {price}
         
          <div className="buy-now">
            <button className="cart">Book Now</button>
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
                  <div className="shop-title">{shop.shopName}</div>
                  <Startrating stars={shop.rating} />
                </div>
              </div>
              <div className="owner-contact">
                <div className="owner-name">{owner.name}</div>

                <div>
                  <span>
                    <IoMdCall />{" "}
                  </span>
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
      <Footer/>
    </section>
  );
}

export default ServiceWrapper;
