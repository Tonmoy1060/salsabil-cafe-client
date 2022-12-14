import React, { useState } from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaCartPlus } from "react-icons/fa";
import Loading from "../shared/Loading";
import Cart from "./Cart";

const SpecificMenu = ({ item, handleAddToCart }) => {
  const [loading, setLoading] = useState(false);
  // state for set total pieces of item
  const [piece, setPiece] = useState(1);
  // state for set total piece * price
  const [newPrice, setNewPrice] = useState(item?.price);
  const [newAllItems, setNewAllItems] = useState(item);

  if (!newAllItems || !item) {
    setLoading(true);
  }

  // handler for increase-quantity
  const handleIncrease = async (event) => {
    if (piece >= 0) {
      setLoading(true);
      setPiece(piece + 1);

      setNewPrice(newPrice + item?.price);
      // update item based on piece and newPrice
      item["newPrice"] = newPrice + item?.price;
      setNewAllItems(item);
      item["piece"] = (await piece) + 1;
      setNewAllItems(item);
      setLoading(false);
    }
  };

  // handler for decrease-quantity
  const handleDecrease = async (event) => {
    if (piece > 1) {
      setLoading(true);
      setPiece(piece - 1);

      setNewPrice(newPrice - item?.price);
      // update item based on piece and newPrice
      item["newPrice"] = newPrice - item?.price;
      setNewAllItems(item);
      item["piece"] = (await piece) - 1;
      setNewAllItems(item);
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="hero bg-info   text-neutral-content  bg-opacity-50">
        <div className="hero-content p-0 flex-col lg:flex-row md:flex-row sm:flex-row text-start">
          <div className="avatar">
            <div className="lg:w-44 max-w-lg lg:h-fit">
              <img className="" src={item?.img} />
            </div>
          </div>
          <div className=" flex justify-between ">
            <div className="mr-2 pl-2 text-center lg:text-start md:text-start lg:p-0 md:p-0 mt-4">
              <h1 className="text-2xl font-bold">
                {item?.name} <small className="text-sm">{item?.quantity}</small>
              </h1>
              <p className="py-1 text-xs">{item?.description}</p>
            </div>
            <div className="flex-col grid content-between">
              <div className="flex justify-around items-center text-xl text-accent font-bold">
                <p className="p-0 flex justify-end items-center">
                  {item?.price}{" "}
                  <TbCurrencyTaka className="p-0"></TbCurrencyTaka>
                </p>
              </div>

              <div className="flex justify-center items-end  my-1 rounded-l-full">
                <div className=" items-center justify-end mb-1 rounded  ml-6  bg-accent">
                  <h1
                    onClick={handleIncrease}
                    className="btn btn-accent btn-sm text-white"
                  >
                    {" "}
                    +{" "}
                  </h1>
                  <p className="ml-3">{piece}</p>
                  <h1
                    onClick={handleDecrease}
                    className="btn btn-accent btn-sm text-white"
                  >
                    {" "}
                    -{" "}
                  </h1>
                </div>
              </div>

              {/* button for adding cart and pass ordered items data as a props */}
              <button
                onClick={() => handleAddToCart(newAllItems)}
                className="btn btn-primary rounded-none "
              >
                <p className="text-lg text-white flex items-center">
                  <FaCartPlus className="mr-1"></FaCartPlus> <p>{newPrice}</p>{" "}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificMenu;
