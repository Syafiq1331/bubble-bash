import React from 'react';
import Card from './Card__Clients';
import client1 from '../assets/clientAssets/client_1.png'
import client2 from '../assets/clientAssets/client_2.png'
import client3 from '../assets/clientAssets/client_3.png'

interface OurPortfolioProps { }

const OurPortfolio: React.FC<OurPortfolioProps> = ({ }) => {
  return (
    <section className='py-[60px]'>
      <div className='container mx-auto md:px-6'>
        <p className='text-[18px] text-[#2A2C3D]/70'>Client Reviews</p>
        <h3 className='text-[36px] font-[600]'>What Our Happy Client Say About Us</h3>
        <div className='grid xl:gap-x-20 gap-x-4 lg:grid-cols-3 gap-y-6 xl:gap-y-12 xl:px-12 my-14'>
          <Card
            title='Website My Hospital'
            desc='Very nice to work with Bubble Bash, a reliable and responsive team is very helpful'
            name='Katty Clock'
            work='CEO My Hospital'
            image={client1}
          />
          <Card
            title='Website My Hospital'
            desc='Really the best service we have ever gotten really looking forward to the next project'
            name='John Robert'
            work='CEO My Hospital'
            image={client2}
          />
          <Card
            title='Website My Hospital'
            desc='The best developer team ever, it is a lot of fun working.'
            name='Robert Samuel'
            work='CEO My Hospital'
            image={client3}
          />
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
