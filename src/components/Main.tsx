import React from 'react';
import OurServices from './OurServices';
import OurPortfolio from './OurPortfolio';
import OurClients from './OurClients';
import Promotion from './Promotion';
import Footer from './Footer';

interface MainProps { }

const Main: React.FC<MainProps> = ({ }) => {
  return (
    <>
      <OurServices />
      <OurPortfolio />
      <OurClients />
      <Promotion />
      <Footer />
    </>
  );
};

export default Main;
