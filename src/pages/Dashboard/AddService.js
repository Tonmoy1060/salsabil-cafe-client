import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Loading from "../shared/Loading";

const AddService = () => {
  const [loading, setLoading] = useState(false);
  if (loading) {
    return <Loading></Loading>;
  }
  const imageKey = "34f752286aded2af59f38a1fb88e9020";
  const handleAddService = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const category = e.target.category.value;
    const quantity = e.target.quantity.value;
    const description = e.target.description.value;
    const price = parseFloat(e.target.price.value);
    const newPrice = price;
    const piece = 1;
    const image = e.target.image.files[0];

    setLoading(true);

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        const img = data.data.url;
        if (img) {
          const item = {
            name: title,
            category,
            quantity,
            price,
            piece,
            newPrice,
            img,
            description,
          };

          fetch("https://salsabil-cafe-server-production.up.railway.app/items", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(item),
          })
            .then((response) => response.json())
            .then((data) => {
              toast.success(`Successfully added ${title} service`);
              setLoading(false);
              e.target.reset();
            });
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-2xl mb-9 text-primary font-bold">
        Add your new Item
      </h1>
      <div className="lg:max-w-xs max-w-sm mx-auto p-2">
        <div className="card lg:w-96 bg-base-100 shadow-xl ">
          <div className="card-body ">
            <form onSubmit={handleAddService} action="">
              <div className="form-control w-full max-w-xs my-3">
                <input
                  name="title"
                  type="text"
                  placeholder="Item Name"
                  className="input input-bordered bg-base-200 w-full max-w-xs"
                  required
                />
              </div>
              <select
                name="category"
                className=" my-3 select select-bordered bg-base-200 select-sm w-full max-w-xs"
                required
              >
                <option disabled selected>
                  Category
                </option>
                <option>Cold Drinks</option>
                <option>Hot & Confectionary Drinks</option>
                <option>Fast Food</option>
                <option>Confectionary</option>
              </select>

              <div className="my-3 flex w-full max-w-xs">
                <input
                  name="price"
                  type="text"
                  placeholder="Price Here"
                  className="input input-sm input-bordered bg-base-200 w-1/2 mr-2 max-w-xs"
                  required
                />
                <input
                  name="quantity"
                  type="text"
                  placeholder="Quantity"
                  className="input input-sm input-bordered bg-base-200 ml-2 w-1/2 max-w-xs"
                  required
                />
              </div>
              <div className="form-control w-full max-w-xs my-3">
                <input
                  type="file"
                  name="image"
                  placeholder="Type here "
                  className="input input-bordered w-full bg-base-300 max-w-xs  my-2"
                  required
                />
              </div>
              <div className="form-control max-w-xs my-3">
              <textarea
                name="description"
                className="textarea textarea-bordered bg-base-200 h-24"
                placeholder="description"
                required
              ></textarea>
            </div>

              <button className=" my-3 btn btn-primary text-white w-full max-w-xs">
                Add Item
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddService;
