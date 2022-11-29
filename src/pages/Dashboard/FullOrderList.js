import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../shared/Loading";

const FullOrderList = () => {
  const [loading, setLoading] = useState(false);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://salsabil-cafe-server-production.up.railway.app/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  const handleDelevered = (e) => {
    setLoading(true);

    fetch(
      `https://salsabil-cafe-server-production.up.railway.app/delevered/${e}`,
      {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(orders),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        refetch();
        setLoading(false);
      });
  };

  if (loading || isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Client Details</th>
              <th>Order Details</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr className={`${order.isAdmin && "text-secondary"}`} key={index}>
                <th>{index + 1}</th>

                <th>
                  <select className="select select-sm select-secondary w-full max-w-xs">
                    <option disabled selected>
                      {order.client}
                    </option>
                    <option disabled>Date: {order.date}</option>
                    <option disabled>Number: {order.number}</option>
                    <option disabled>Address: {order.address}</option>
                    <option disabled>Total: {order.amount}tk</option>
                    <option disabled>Total Item: {order.totalOrder}</option>
                  </select>
                </th>
                <th>
                  <select className="select select-sm select-secondary w-full max-w-xs">
                    <option disabled selected>
                      Orders
                    </option>
                    {order.orderItems.map((orderItem) => (
                      <option key={orderItem._id} disabled>
                        {orderItem.piece}*{orderItem.name} {orderItem.quantity}{" "}
                        = {orderItem.newPrice}tk
                      </option>
                    ))}
                  </select>
                </th>
                {order.paid ? (
                  <td className={`${order.isAdmin ? 'text-accent' : 'text-green-500'} ' flex '`}>
                    {" "}
                    {order.delevered ? (
                      "delivered"
                    ) : (
                      <button
                        onClick={() => handleDelevered(order._id)}
                        className="btn btn-xs btn-accent text-white"
                      >
                        Paid
                      </button>
                    )}{" "}
                    {order.isAdmin && <p className="text-secondary text-xs">Ad</p>}
                  </td>
                ) : (
                  <td className="text-orange-500">Pending</td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FullOrderList;
