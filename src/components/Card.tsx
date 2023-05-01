import React from 'react';

interface CardProps {
  title?: string;
  desc?: string;
  image?: string;
}

const Card: React.FC<CardProps> = ({ title, desc, image }) => {
  return (
    <div className='w-[289px] mx-auto py-[32px] px-[24px] border border-slate-200/80 shadow-lg'>
      <img src={image} className='w-[48px] mx-auto mb-[16px]' alt="" />
      <h5 className='font-semibold text-[24px] text-center mb-[16px] text-[#2A2C3D]'>{title}</h5>
      <p className='text-[18px] text-[#2A2C3D]/70 text-center font-[400]'>{desc}</p>
    </div>
  );
};

export default Card;
