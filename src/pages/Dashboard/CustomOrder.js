import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../shared/Loading";

const CustomOrder = () => {
  const [loading, setLoading] = useState(false);

  const {
    data: customOrders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://salsabil-cafe-server-production.up.railway.app/order/true", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

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
              <th>Admin</th>
            </tr>
          </thead>
          <tbody>
            {customOrders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>

                <th>
                  <select className="select select-sm select-secondary w-full max-w-xs">
                    <option disabled selected>
                      {order.name}
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
                <td>
                  {order.client}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomOrder;
