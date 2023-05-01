import React from 'react';
import IntroImage from '../assets/IntroImage.png';

interface IntroProps { }

const Intro: React.FC<IntroProps> = ({ }) => {
  return (
    <section className='container mx-auto text-white -mt-80'>
      <div className='my-20'>
        <img src={IntroImage} alt="" className='mx-auto' />
        <div className='text-[#2A2C3D] py-12 flex gap-x-[10rem] justify-center'>
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
