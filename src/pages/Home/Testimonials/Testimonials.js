import React from 'react';
import VisitorsDaily from '../About/VisitorsDaily';
import NewsLetters from './NewsLetters';
import VisitorsSay from './VisitorsSay';

const Testimonials = () => {
   return (
      <div className="card max-w-full bg-base-100   shadow-2xl py-0 my-0 lg:mx-20 mx-7">
      <div className="card-body py-0 my-0">
        <VisitorsSay></VisitorsSay>
        <NewsLetters></NewsLetters>
      </div>
    </div>
   );
};

export default Testimonials;