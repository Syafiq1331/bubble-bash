import React from 'react';
import IntroImage from '../assets/IntroImage.png';

interface IntroProps { }

const Intro: React.FC<IntroProps> = ({ }) => {
  return (
    <section className='container mx-auto text-white lg:-mt-80 -mt-52'>
      <div className='my-20'>
        <img src={IntroImage} alt="" className='mx-auto w-[35rem] lg:w-auto' />
        <div className='text-[#2A2C3D] py-12 grid lg:grid-cols-4 grid-cols-2 gap-y-6 lg:gap-y-0 justify-center'>
          <div>
            <h4 className='font-semibold text-[32px] text-center'>1.2K+</h4>
            <p className='text-[18px] text-center'>Happy Clients</p>
          </div>
          <div>
            <h4 className='font-semibold text-[32px] text-center'>1.1K+</h4>
            <p className='text-[18px] text-center'>WorldWide Clients</p>
          </div>
          <div>
            <h4 className='font-semibold text-[32px] text-center'>6+</h4>
            <p className='text-[18px] text-center'>Years of Experience</p>
          </div>
          <div>
            <h4 className='font-semibold text-[32px] text-center'>12+</h4>
            <p className='text-[18px] text-center'>Award Winners</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
