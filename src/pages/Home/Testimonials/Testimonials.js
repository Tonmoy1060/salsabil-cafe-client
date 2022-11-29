import React from 'react';
import VisitorsDaily from '../About/VisitorsDaily';
import NewsLetters from './NewsLetters';
import VisitorsSay from './VisitorsSay';

const Testimonials = () => {
   return (
      <div className="card max-w-full bg-base-100  lg:pb-10  shadow-2xl py-0 my-0 lg:mx-20 md:mx-14 mx-2">
      <div className="card-body py-0 my-0 px-3 sm:px-8 md:px-8 lg:px-8">
        <VisitorsSay></VisitorsSay>
        <NewsLetters></NewsLetters>
      </div>
    </div>
   );
};

export default Testimonials;