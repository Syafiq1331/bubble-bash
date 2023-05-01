import React from 'react';

interface CardProps {
  title: string;
  desc: string;
  image: string;
  name: string;
  work: string;
}

const Card: React.FC<CardProps> = ({ title, desc, image, name, work }) => {
  return (
    <div className='border text-slate-900 border-slate-900 p-[24px]'>
      <h3 className='text-[24px] font-[600] mb-[8px]'>{title}</h3>
      <p className='mb-[21px] text-[18px] opacity-90'>{desc}</p>
      <div className='flex gap-x-6'>
        <img src={image} className='w-[60px]' />
        <div>
          <h5 className='text-[18px] font-[600]'>{name}</h5>
          <p className='text-[16px] opacity-70'>{work}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
