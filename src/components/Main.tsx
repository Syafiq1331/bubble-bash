import React from 'react';
import OurServices from './OurServices';
import OurPortfolio from './OurPortfolio';
import OurClients from './OurClients';
import Promotion from './Promotion';

interface MainProps { }

const Main: React.FC<MainProps> = ({ }) => {
  return (
    <>
      <OurServices />
      <OurPortfolio />
      <OurClients />
      <Promotion />
    </>
  );
};

export default Main;
