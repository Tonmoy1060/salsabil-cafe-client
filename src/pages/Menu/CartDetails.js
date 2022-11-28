import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

const CartDetails = ({ cart, deleteFromCart }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-xs">
      <div className="flex justify-between max-w-xs ">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-7 mx-1 rounded">
              <img src={cart?.img} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
          <h1 className="text-xs font-semibold">{cart?.name} </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between">
            <h1 className="badge rounded-sm text-white ml-3 flex items-center">
              {cart?.price}{" "}
            </h1>
            <h1 className="badge rounded-sm text-white mx-1">
              <small className=" mt-0.5 ">✕</small>
              {cart?.piece}{" "}
            </h1>
            <h1 className="badge badge-accent text-white mr-3">
              {cart?.newPrice}{" "}
            </h1>
          </div>

          <button
            onClick={() => deleteFromCart(cart)}
            className="btn btn-square btn-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
