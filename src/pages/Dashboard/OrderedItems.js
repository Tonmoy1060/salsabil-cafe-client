import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

const OrderedItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://salsabil-cafe-server-production.up.railway.app/orders/${user?.email}`, {
      method: "GET",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          navigate("/");
          signOut(auth);
          localStorage.removeItem("accessToken");
        }
        return res.json();
      })
      .then((data) => setBookings(data));
  }, []);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-primary capitalize">
        Welcome {user?.displayName},
      </h1>
      <p className="text-sm font-semibold mb-4">your order list here</p>
      <div className="overflow-x-auto drop-shadow-xl">
        <table className="table w-full ">
          <thead>
            <tr>
              <th></th>

              <th>Orders</th>

              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking, index) => (
              <tr key={index}>
                <th>{index + 1}</th>

                <td>
                  <select className="select select-primary  select-sm w-full max-w-xs">
                    <option disabled selected >
                      {booking?.date} Orders
                    </option>
                    {booking?.orderItems.map((order) => (
                      <option key={order._id} disabled>
                        {order?.piece} * {order?.name} ({order?.quantity})
                      </option>
                    ))}
                  </select>
                </td>

                <td className="">
                  {booking?.paid ? (
                    <p className={`${booking.isAdmin ? 'text-accent' : 'text-primary'} inline`}>PAID</p>
                  ) : (
                    <Link
                      to={`/dashboard/payment/${booking?._id}`}
                      className="btn btn-xs px-5 bg-red-500 drop-shadow-xl text-white border-none"
                    >
                      {booking?.amount} Tk
                    </Link>
                  )}
                  {booking.isAdmin && <p className="text-primary text-xs inline">Admin</p>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderedItems;
