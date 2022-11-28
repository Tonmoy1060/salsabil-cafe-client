import React from 'react';

const PeopleReviews = ({review}) => {
   const { name, comment, img, location, ratings } = review;
  return (
    <div className="w-full rounded-xl mb-8 p-5 transition ease-in-out delay-100 hover:shadow-2xl hover:-translate-y-1 hover:scale-110 duration-700 ...">
      <div className="flex items-center">
        <div className="avatar">
          <div className="w-14 mr-4 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
            <img  src={img} />
          </div>
        </div>
        <div> 
          <h1 className="font-bold text-xl capitalize mb-1">{name}</h1>
          <small className="text-accent font-bold">Ratings :  {ratings}  / 10</small>
          <p className="font-semibold text-sm capitalize ">{location}</p>
        </div>
      </div>
      <div className="pt-3">
        <p>
          <small className="text-accent text-xs">{comment}</small>
        </p>
      </div>
    </div>
  );
};

export default PeopleReviews;