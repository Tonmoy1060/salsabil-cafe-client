import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51LvxlPKo5fTB3qH00tnGe5Qyu05GjX5r60vRWkidLR9aoo1u423FKWfpElfUaFdcrUoFIzGHwP3GwL4eW7YoEX5T00gcrzPqpE"
);

const Payment = () => {
  const [user, loading, error] = useAuthState(auth);
  const params = useParams();

  const {
    data: exactBooking,
    isLoading,
    refetch,
  } = useQuery("bookingId", () =>
    fetch(`https://salsabil-cafe-server-production.up.railway.app/bookingId/${params.id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );


  if (isLoading || loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-sm mx-auto p-3">
      <h1 className="text-2xl font-bold text-secondary capitalize">
        Welcome {user?.displayName},
      </h1>
      <p className="text-xs font-semibold mb-4">
        your paying 
      </p>
      <div className="flex flex-col ">
        <input
          type="text"
          defaultValue={user?.displayName}
          className="input font-semibold rounded-sm w-full max-w-lg"
        />
        <input
          type="text"
          defaultValue={user?.email}
          className="input font-semibold rounded-sm w-full max-w-lg my-3"
        />
        <select className="select select-md select-secondary w-full max-w-md">
                    <option disabled selected>
                      Paying For
                    </option>
                    {exactBooking?.orderItems.map((orderItem) => (
                      <option key={orderItem._id} disabled>
                        {orderItem.piece}*{orderItem.name} {orderItem.quantity}{" "}
                        = {orderItem.newPrice}tk
                      </option>
                    ))}
                  </select>
      </div>
      <div>
        <div className="card mt-10 bg-base-100 shadow-xl">
          <div className="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm exactBooking={exactBooking} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
