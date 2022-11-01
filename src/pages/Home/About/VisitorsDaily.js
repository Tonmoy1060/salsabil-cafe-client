import React from "react";

const VisitorsDaily = () => {
  return (
    <div className="lg:flex lg:justify-between mb-14 py-1 pb-12">
      <div className="card text-center">
        <div className="card-body tracking-wide ">
          <h2 className="card-title text-5xl font-semibold justify-center font-serif ">
            200 <span className=" ml-2 text-5xl text-primary">+</span>
          </h2>
          <p className="tracking-wide  mt-2">VISITORS DAILY</p>
        </div>
      </div>
      <div className="card text-center ">
        <div className="card-body tracking-wide">
          <h2 className="card-title text-5xl font-semibold justify-center font-serif ">
            400 <span className=" ml-2 text-5xl text-primary">+</span>
          </h2>
          <p className="tracking-wide mt-2">DELIVERIES MONTHLY</p>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body tracking-wide ">
          <h2 className="card-title text-5xl font-semibold  justify-center font-serif ">
            100 <span className=" ml-2 text-5xl text-primary">%</span>
          </h2>
          <p className="tracking-wide mt-2">POSITIVE FEEDBACK</p>
        </div>
      </div>
      <div className="card text-center">
        <div className="card-body tracking-wide">
          <h2 className="card-title text-5xl font-semibold justify-center font-serif ">40 <span className=" ml-2 text-5xl text-primary">+</span></h2>
          <p className="tracking-wide mt-2">AWARDS AND HONORS</p>
          
        </div>
      </div>
    </div>
  );
};

export default VisitorsDaily;
