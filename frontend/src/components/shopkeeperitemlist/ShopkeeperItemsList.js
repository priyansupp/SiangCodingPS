import React from "react";
import data from "../../database/shopkeeperItems.json";
import "./ShopkeeperItemsList.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

function ShopkeeperItemsList() {
  return (
    <div>
      <div>
        {data.item.map((data) => {
          return (
            <Link
              to="/prodes"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <div className="item_list_sec_S">
                <img
                  src={data.item_img}
                  alt="pi"
                  className="item_img_list_S"
                ></img>
                <div className="about_item_list_S">
                  <div className="item_name_list_S">{data.item_name}</div>
                  <div className="item_des_list_S">
                    <div className="item_des_on_S">{data.item_des}</div>
                    <div className="item_p_e_del_S">
                      <div className="item_price_list_S">
                        ₹{data.item_price}
                      </div>
                      <div className="edit_S">
                        <FaEdit className="edit_bin_S" />
                        <span class="tooltiptext_S">Edit Item</span>
                      </div>
                      <div className="delete_S">
                        <FaTrash className="trash_bin_S" />
                        <span class="tooltiptext_S">Remove Item</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ShopkeeperItemsList;
