import React from 'react';
import About from './About/About';
import VisitorsDaily from './About/VisitorsDaily';
import Banner from './Banner';
import Reservation from './Reservation';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
   return (
      <div>
         <Banner></Banner>
         <About></About>
         <Reservation></Reservation>
         <Testimonials></Testimonials>
      </div>
   );
};

export default Home;