import logo from '../assets/logo.png';
import rightRow from '../assets/ArrowRight.png';
import React, { useState } from 'react';
import { BsXLg } from "react-icons/bs";

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav className='text-white flex items-center justify-between container px-6 mx-auto py-10'>
        <div className='flex items-center gap-x-1'>
          <img src={logo} alt="" />
          <p className='font-semibold text-[20px]'>Bubble Bash</p>
        </div>
        <div className='hidden lg:block'>
          <ul className='flex gap-x-6'>
            <li className='text[20px]'>Home</li>
            <li className='text[20px]'>Our Servies</li>
            <li className='text[20px]'>Portfolio</li>
            <li className='text[20px]'>Testimonial</li>
            <li className='text[20px]'>Contact us</li>
          </ul>
        </div>
        {/* Responsive navbar */}
        <div className='block lg:hidden'>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0
                110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0
                01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div
          className={`fixed flex px-12 py-24 top-0 left-0 w-full h-full bg-gray-800 transition-all duration-300 opacity-90 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
          <ul className='flex gap-y-6 flex-col'>
            <li className='text[20px] font-semibold'>Home</li>
            <li className='text[20px] font-semibold'>Our Servies</li>
            <li className='text[20px] font-semibold'>Portfolio</li>
            <li className='text[20px] font-semibold'>Testimonial</li>
            <li className='text[20px] font-semibold'>Contact us</li>
          </ul>
          <div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <p className='text-4xl absolute right-8 top-10'><BsXLg /></p>
            </button>
          </div>
        </div>
      </nav>
      <div className='text-white'>
        <h1 className='xl:text-[64px] lg:text-[40px] md:text-[36px] xl:mt-12 mt-10 font-bold text-center'>Create Amazing Digital Product <br />
          For Your Business</h1>
        <p className='lg:text-[18px] md:text-[14px] leading-relaxed xl:my-12 md:my-4 font-[400] text-center'>We are a professional digital agency that has been established since 2016, we present a variety of
          <br /> digital services that can help you solve problems in your business</p>
        <div className='bg-white flex gap-x-2 items-center mx-auto xl:py-[23px] md:py-[19px] px-[32px] w-[211px] text-black'>
          <p className='font-[700] text-[20px]'>Get Started</p>
          <img src={rightRow} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
