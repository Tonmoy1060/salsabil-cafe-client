import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";
import CartDetails from "./CartDetails";

const Cart = ({ addingCart, setAddingCart, handleModal}) => {
  const [loading, setLoading] = useState(false);
  const [user, uLoading, error] = useAuthState(auth);
  let [number, setNumber] = useState(0);
  
  addingCart.forEach((newCart) => {
    number += newCart?.newPrice;
  });

  const deleteFromCart = async (cart) => {
    setLoading(true)
    const updateCart = await addingCart.filter((newCart) => newCart?._id !== cart?._id);
    setAddingCart(updateCart);
    setLoading(false)
  };

  return (
    <div className="fixed top-20 mt-1 right-1">
      <div className="collapse ">
        <input type="checkbox" className="peer" />
        <div className="collapse-title py-0 pt-3 rounded-full bg-base-100 text-primary-content  peer-checked:text-secondary-content">
          <div className="indicator w-full mx-auto">
            <span className="indicator-item badge text-center  badge-accent text-white">
              {addingCart?.length}
            </span>
            <BsFillBagCheckFill className="text-3xl ml-5 text-primary w-full mx-auto text-center"></BsFillBagCheckFill>
          </div>
        </div>
        <div className="collapse-content p-0 mt-1 text-primary-content  peer-checked:text-secondary-content">
          <div>
            <div className="card bg-base-100 shadow-xl">
              <div className="p-2">
                <div className="card-body p-3 ">
                  {addingCart.map((cart) => (
                    <CartDetails
                      key={cart._id}
                      cart={cart}
                      deleteFromCart={deleteFromCart}
                    ></CartDetails>
                  ))}
                </div>
                {number ? (
                  <div className="flex items-center justify-around">
                    
                    <h1 className="badge  text-white">
                      Total: {number}
                    </h1>
                    {user ? (
                      // <button className="btn btn-accent btn-xs text-white">
                      <label
                        onClick={() =>handleModal(number)}
                        htmlFor="bookingModal"
                        className="btn btn-accent btn-xs text-white"
                      >
                        Place Order
                      </label>
                    ) : (
                      // </button>
                      <Link
                        to={"/login"}
                        className="btn btn-accent btn-xs text-white"
                      >
                        Login first
                      </Link>
                    )}
                  </div>
                ) : (
                  <h1 className="badge text-white">
                    Please add item
                  </h1>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
