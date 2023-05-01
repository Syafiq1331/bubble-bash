import React from 'react';
import Card from './Card__Portfolio';
import gambar1 from '../assets/portfolioAssets/1.png'
import gambar2 from '../assets/portfolioAssets/2.png'
import gambar3 from '../assets/portfolioAssets/3.png'

interface OurPortfolioProps { }

const OurPortfolio: React.FC<OurPortfolioProps> = ({ }) => {
  return (
    <section className='py-[60px]'>
      <div className='container mx-auto'>
        <p className='text-[18px] text-[#2A2C3D]/70'>Our Portofolio’s</p>
        <h3 className='text-[36px] font-[600]'>Recent Projects</h3>

        <div className='grid gap-x-2 grid-cols-3 gap-y-12 px-12 my-14'>
          <Card image={gambar1} title='Website My Hospital' desc='Create a hospital website with patient, doctor, and drug logistics features that help hospital operations' />
          <Card image={gambar2} title='Food & Beverages Corp Logo' desc='Create a logo for a food & beverage company, with emphasis on aesthetics and user requests' />
          <Card image={gambar3} title='Supermarket Mobile Apps' desc='Develop mobile applications for supermarkets with buy, auto-pay, and marketplace features' />
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;
