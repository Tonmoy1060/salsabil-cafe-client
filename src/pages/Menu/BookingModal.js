import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import useTimeAndDate from "../../hooks/useTimeAndDate";
import Loading from "../shared/Loading";

const BookingModal = ({
  addingCart,
  modalData,
  totalAmount,
  setAddingCart,
  index,
  adminChecked
}) => {

  const [user, uLoading, error] = useAuthState(auth);
  const [loading, setLoading] = useState(false);
  const [timeAndDate] = useTimeAndDate();

  const buttonOrder = (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const number = e.target.number.value;
    const address = e.target.address.value;
    const name = e.target.name.value;
   
    const paid = adminChecked;
    const delivered = adminChecked;
    const isAdmin = adminChecked;

    

    const order = {
      orderItems: addingCart,
      client: email,
      name: name,
      number: number,
      address: address,
      totalOrder: index,
      amount: totalAmount,
      date: timeAndDate,
      paid: paid,
      delevered: delivered,
      isAdmin: isAdmin
    };

    fetch("https://salsabil-cafe-server-production.up.railway.app/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success(`${index} item Ordered successfully`)
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    //  console.log(email, number, address, modalData);
    setAddingCart([]);
    e.target.reset();
    setLoading(false);
  };

  // if (
  //   loading ||
  //   uLoading ||
  //   !modalData ||
  //   !index ||
  //   !totalAmount ||
  //   !addingCart
  // ) {
  //   return <Loading></Loading>;
  // }
  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="bookingModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div>
            <select className="select select-bordered bg-base-200 select-sm w-full max-w-xs mb-2">
              <option className="bg-base-200" disabled selected>
                Your {index} order here
              </option>
              {addingCart.map((cart) => (
                <option disabled
                  key={cart._id}
                  className="flex items-center justify-between"
                >
                  {" "}
                  <small>{cart.piece}</small>
                  <h1>* </h1>
                  <small className="font-bold"> {cart.name} {cart.quantity} </small>
                </option>
              ))}
            </select>
          </div>

          <div>
            {modalData?.order0?.piece && (
              <div className="m-1 indicator">
                <span className="indicator-item badge badge-secondary">
                  {modalData?.order0?.piece}
                </span>

                <div className="grid bg-base-200 place-items-center">
                  <h3 className="font-bold text-sm px-1">
                    {modalData?.order0?.name}
                  </h3>
                </div>
              </div>
            )}

            {modalData?.order1?.piece && (
              <div className="m-1 indicator">
                <span className="indicator-item badge badge-secondary">
                  {modalData?.order1?.piece}
                </span>

                <div className="grid bg-base-200 place-items-center">
                  <h3 className="font-bold text-sm px-1">
                    {modalData?.order1?.name}
                  </h3>
                </div>
              </div>
            )}

            {modalData?.order2?.piece && (
              <div className="m-1 indicator">
                <span className="indicator-item badge badge-secondary">
                  {modalData?.order2?.piece}
                </span>

                <div className="grid bg-base-200 place-items-center">
                  <h3 className="font-bold text-sm px-1">
                    {modalData?.order2?.name}
                  </h3>
                </div>
              </div>
            )}

            {modalData?.order3?.piece && (
              <div className="m-1 indicator">
                <span className="indicator-item badge badge-secondary">
                  {modalData?.order3?.piece}
                </span>

                <div className="grid bg-base-200 place-items-center">
                  <h3 className="font-bold text-sm px-1">
                    {modalData?.order3?.name}
                  </h3>
                </div>
              </div>
            )}

            {modalData?.order4?.piece && (
              <div className="m-1 indicator">
                <span className="indicator-item badge badge-secondary">
                  {modalData?.order4?.piece}
                </span>

                <div className="grid bg-base-200 place-items-center">
                  <h3 className="font-bold text-sm px-1">
                    {modalData?.order4?.name}
                  </h3>
                </div>
              </div>
            )}

            {modalData?.order5?.piece && (
              <div className="m-1 indicator">
                <span className="indicator-item badge badge-secondary">
                  {modalData?.order5?.piece}
                </span>

                <div className="grid bg-base-200 place-items-center">
                  <h3 className="font-bold text-sm px-1">
                    {modalData?.order5?.name}
                  </h3>
                </div>
              </div>
            )}

            {modalData?.order6?.piece && (
              <div className="m-1 indicator">
                <span className="indicator-item badge badge-secondary">
                  {modalData?.order6?.piece}
                </span>

                <div className="grid bg-base-200 place-items-center">
                  <h3 className="font-bold text-sm px-1">
                    {modalData?.order6?.name}
                  </h3>
                </div>
              </div>
            )}

            {modalData?.order7?.piece && (
              <div className="m-1 indicator">
                <span className="indicator-item badge badge-secondary">
                  {modalData?.order7?.piece}
                </span>

                <div className="grid bg-base-200 place-items-center">
                  <h3 className="font-bold text-sm px-1">
                    {modalData?.order7?.name}
                  </h3>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={buttonOrder}>
            <input
              type="email"
              name="email"
              value={user?.email}
              readOnly
              className="input input-bordered input-sm w-full max-w-xs mt-1"
            />
              <input
                type="text"
                name="name"
                placeholder="Client Name"
                required
                className="input input-bordered input-sm w-full max-w-xs mt-1"
              />
            <input
              type="phone"
              name="number"
              placeholder="Your Phone"
              required
              className="input input-bordered input-sm w-full max-w-xs mt-1"
            />
            <input
              type="text"
              name="address"
              placeholder="Address to accept"
              required
              className="input input-bordered input-sm w-full max-w-xs mt-1"
            />
            <h1 className="badge block text-white mt-3">
              date: {timeAndDate}
            </h1>
            <h1 className="badge block text-white mt-3">
              Total: {totalAmount}
            </h1>

            <div className=" flex justify-end">
              <button className="modal-action ">
                <label
                  htmlFor="bookingModal"
                  className="btn btn-accent text-white btn-sm"
                >
                  Order
                </label>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default BookingModal;
