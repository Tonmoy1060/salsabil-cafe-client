import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../shared/Loading";

const Review = () => {
  const [loading, setLoading] = useState(false);
  const [user, uLoading, error] = useAuthState(auth);
  
  const imageKey = "34f752286aded2af59f38a1fb88e9020";
  const handleReview = async (e) => {
    e.preventDefault();
    const name = user.displayName;
    const email = user.email;
    const location = e.target.location.value;
    const ratings = e.target.ratings.value;
    const comment = e.target.comments.value;

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
          const comments = {
            name: name,
            email,
            location,
            ratings,
            img,
            comment,
          };

          fetch("https://salsabil-cafe-server-production.up.railway.app/review", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(comments),
          })
            .then((response) => response.json())
            .then((data) => {
              toast.success(`Thanks ${name} for review us`);
              setLoading(false);
              e.target.reset();
            });
        }
      });
  };

  if (loading || uLoading) {
   return <Loading></Loading>;
 }

  return (
    <div>
      <h1 className="text-center text-2xl mb-9 text-primary font-bold">
        Review Us
      </h1>
      <div className="lg:max-w-xs max-w-sm mx-auto p-2">
        <div className="card lg:w-96 bg-base-100 shadow-xl ">
          <div className="card-body ">
            <form onSubmit={handleReview} action="">
            <div className="form-control max-w-xs my-3">
                <textarea
                  name="comments"
                  className="textarea textarea-bordered bg-base-200 h-24"
                  placeholder="Comment here"
                  required
                ></textarea>
              </div>
              <div className="form-control w-full max-w-xs my-3">
                <input
                  name="location"
                  type="text"
                  placeholder="Your Location"
                  className="input input-bordered bg-base-200 w-full max-w-xs"
                  required
                />
              </div>

              <div className="my-3 flex w-full max-w-xs">
                <input
                  name="ratings"
                  type="text"
                  placeholder="Rating Us"
                  className="input input-sm input-bordered bg-base-200  max-w-xs"
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
              

              <button className=" my-3 btn btn-primary text-white w-full max-w-xs">
                Add Review
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Review;
