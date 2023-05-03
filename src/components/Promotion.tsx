import React from 'react';
import rightRow from '../assets/ArrowRight.png';

interface PromotionProps { }

const Promotion: React.FC<PromotionProps> = ({ }) => {
  return (
    <div className='h-[425px] text-white bg-[#2F6B4F] xl:py-[60px] md:py-[80px] py-[60px] xl:px-[389px]'>
      <h1 className='xl:text-[48px] md:text-[32px] text-[28px] font-bold text-center'>Have a project idea and <br />
        want to make it come true?</h1>
      <p className='lg:text-[18px] text-[14px] leading-relaxed mt-4 text-center'>Please contact us and we will discuss about your project, don't forget we are <br /> always here for you</p>
      <div className='bg-white flex gap-x-2 mt-4 items-center mx-auto py-[23px] md:px-[32px] px-[16px] w-[211px] text-black'>
        <p className='font-[700] text-[20px]'>Get Started</p>
        <img src={rightRow} alt="" />
      </div>


    </div>
  );
};

export default Promotion;
