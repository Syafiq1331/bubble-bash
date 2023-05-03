import React from 'react';
import Card from './Card';
import Icon from '../assets/icons/FigmaLogo.svg'

interface OurServicesProps { }

const OurServices: React.FC<OurServicesProps> = ({ }) => {
  return (
    <section className=' bg-[#F9F9F9] py-[60px]'>
      <div className='container mx-auto md:px-6 px-4'>
        <p className='text-[18px] text-[#2A2C3D]/70'>Our Services</p>
        <h3 className='text-[36px] font-[600]'>We Provide What You Need</h3>

        <div className='grid gap-x-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-12 px-12 my-14'>
          <Card image={Icon} title='UI/UX Designer' desc='We are ready to make your website more friendly and efficient in the eyes of users' />
          <Card image={Icon} title='UI/UX Designer' desc='We are ready to make your website more friendly and efficient in the eyes of users' />
          <Card image={Icon} title='UI/UX Designer' desc='We are ready to make your website more friendly and efficient in the eyes of users' />
          <Card image={Icon} title='UI/UX Designer' desc='We are ready to make your website more friendly and efficient in the eyes of users' />
          <Card image={Icon} title='UI/UX Designer' desc='We are ready to make your website more friendly and efficient in the eyes of users' />
          <Card image={Icon} title='UI/UX Designer' desc='We are ready to make your website more friendly and efficient in the eyes of users' />
        </div>
      </div>
    </section>
  );
};

export default OurServices;
