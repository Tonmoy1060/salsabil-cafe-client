import React, { useEffect, useState } from "react";
import PeopleReviews from "./PeopleReviews";

const VisitorsSay = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://salsabil-cafe-server-production.up.railway.app/review")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-14 pt-2">
        <div className="w-10 rounded-lg m-2 h-1 mx-auto bg-secondary"></div>
        <h4 className="text-lg tracking-wide font-bold pt-2">TESTIMONIALS</h4>
        <h1 className="font-bold lg:text-5xl text-4xl my-4 font-serif ">
          What our visitor's say
        </h1>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
          dignissimos.
        </p>
      </div>
      <div className="lg:flex items-center my-10 mb-6">
        <div>
          <div className="lg:grid grid-cols-3 gap-3 px-3">
            {comments?.slice(0, 3).map((review, index) => (
              <PeopleReviews key={index} review={review}></PeopleReviews>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col w-3/4 mx-auto">
        <div className="divider mt-0 pt-0"></div>
      </div>
    </div>
  );
};

export default VisitorsSay;
