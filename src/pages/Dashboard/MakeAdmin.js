import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../shared/Loading";

const MakeAdmin = () => {
  const [loading, setLoading] = useState(false);
  const handleAdmin = (e) => {
    setLoading(true);
    e.preventDefault();
    const email = e.target.email.value;
    const updateEmail = { email: email };
    fetch(`https://salsabil-cafe.onrender.com/user/admin/${email}`, {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(updateEmail),
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(`${email} is admin now`);
        e.target.reset();
        setLoading(false);
      });
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-cyan-50 rounded p-28">
      <h1 className="m-2">Make an Admin</h1>
      <div className="form-control">
        <form onSubmit={handleAdmin} className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered"
          />
          <button className="btn btn-primary text-white">Add</button>
        </form>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MakeAdmin;
