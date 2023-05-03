import React from 'react';

interface CardProps {
  title?: string;
  desc?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, desc, image }) => {
  return (
    <div className='mx-auto py-[32px] p-[60px] '>
      <img src={image} className='xl:mx-auto mb-[16px]' alt="" />
      <h5 className='font-semibold text-[24px] mb-[6px] text-[#2A2C3D]'>{title}</h5>
      <p className='text-[16px] text-[#2A2C3D]/70 font-[400]'>{desc}</p>
    </div>
  );
};

export default Card;
