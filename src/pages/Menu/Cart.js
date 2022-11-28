import React from "react";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { BsFillBagCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../shared/Loading";
import CartDetails from "./CartDetails";

const Cart = ({ addingCart, setAddingCart, handleModal, setAdminChecked }) => {
  const [loading, setLoading] = useState(false);
  const [user, uLoading, error] = useAuthState(auth);
  let [number, setNumber] = useState(0);
  const [admin, adminLoading] = useAdmin(user);

  addingCart.forEach((newCart) => {
    number += newCart?.newPrice;
  });

  const deleteFromCart = async (cart) => {
    setLoading(true);
    const updateCart = await addingCart.filter(
      (newCart) => newCart?._id !== cart?._id
    );
    setAddingCart(updateCart);
    setLoading(false);
  };

  const handleToggler = (e) => {
    setAdminChecked(e.target.checked);
  };

  return (
    <div className="fixed top-[60px] mt-0 right-0 z-40">
      <div className="collapse p-0">
        <input type="checkbox" className="peer" />
        <div className="collapse-title py-0 pt-3 rounded-full bg-base-900 text-end p-0 text-primary-content  peer-checked:text-secondary-content">
          <div className="indicator text-end lg:px-8 md:px-8 px-4 shadow-lg lg:py-6 md:py-6 py-3 bg-black bg-opacity-80 ">
            <span className="indicator-item badge   badge-primary text-white mt-4 mr-5">
              {addingCart?.length}
            </span>
            {/* <span className=""> */}
            <BsFillBagCheckFill className="text-3xl  text-white   text-end"></BsFillBagCheckFill>
            {/* </span> */}
          </div>
        </div>
        <div className="collapse-content shadow-2xl p-0 text-primary-content  peer-checked:text-secondary-content ">
          <div className="card bg-base-300 rounded-sm">
            <div className="mb-3 ">
              <div className="card-body p-2">
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
                  <h1 className="badge  text-white">Total: {number}</h1>
                  {user && admin &&
                  (
                    <div className="flex items-center">
                      <input
                        onClick={handleToggler}
                        type="checkbox"
                        className="rounded-r-none  toggle toggle-xs"
                      />
                      <h1 className="bg-neutral px-1  text-xs rounded-r-full text-white">
                        Custom
                      </h1>
                    </div>
                  )}

                  {user ? (
                    // <button className="btn btn-accent btn-xs text-white">
                    <label
                      onClick={() => handleModal(number)}
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
                <h1 className="badge text-white">Please add item</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
