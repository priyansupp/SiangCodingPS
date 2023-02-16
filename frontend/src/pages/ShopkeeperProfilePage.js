import React from "react";
import { AboutShop } from "../components/ShopkeeperData/AboutShop";
import { Nav2 } from "../components/ShopkeeperData/nav2";
import { Shopkeeper } from "../components/ShopkeeperData/shopkeeper";
import data from "../database/shopkeeper_data.json";

const ShopkeeperProfilePage = () => {
  return (
    <div>
      <div>
        {data.shopkeeper.map((data) => {
          return (
            <>
              <Nav2 profilePhoto={data.profilePhoto} />
              <Shopkeeper
                shopPhoto={data.shopPhoto}
                name={data.name}
                shopName={data.shopName}
                email={data.email}
                contact={data.contact}
              />
              <AboutShop about={data.aboutShop} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default ShopkeeperProfilePage;
