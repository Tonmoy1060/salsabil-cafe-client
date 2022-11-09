import React from "react";
import AboutUs from "./AboutUs";
import Features from "./Features";
import VisitorsDaily from "./VisitorsDaily";
import WorkingHour from "./WorkingHour";

const About = () => {
  return (
    <div className="card max-w-full bg-base-100  shadow-2xl py-0 my-0 lg:mx-20 md:mx-14 mx-2 mt-[-45px]">
      <div className="card-body py-0 my-0 px-3 sm:px-8 md:px-8 lg:px-8">
        <AboutUs></AboutUs>
        <Features></Features>
        <WorkingHour></WorkingHour>
        <VisitorsDaily></VisitorsDaily>
      </div>
    </div>
  );
};

export default About;
