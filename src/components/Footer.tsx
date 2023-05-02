import React from 'react';
import logo from '../assets/logo.png'
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

interface FooterProps { }

const Footer: React.FC<FooterProps> = ({ }) => {
  const pages = ['Home', 'About', 'Services', 'Portfolio', 'Contact'];
  const explore = ['FAQ', 'Privacy Policy', 'Career', 'Terms of Service'];
  const company = ['About Us', 'Blog', 'Contact Us', 'Pricing', 'Testimonials', 'Team'];

  return (
    <footer className='grid grid-cols-6 container mx-auto lg:pt-44 pt-24 pb-12'>
      <div className='lg:col-span-2 px-8 mb-4 col-span-5'>
        <div className='flex gap-x-2 items-center'>
          <img src={logo} alt='logo' />
          <h3 className='text-[20px] font-[600] '>Bubble Bash</h3>
        </div>
        <p className='text-[18px] my-3 text-[#2A2C3D]/70'>Introducing, We are Bubble Bash digital agency company with more than 6 years of experience. We are committed to serve with all our heart</p>
        <div className='flex gap-x-4'>
          <a href="">
            <i className='fab fa-facebook-f text-[#2A2C3D]/70 text-[24px] mr-3'>
              <BsFacebook />
            </i>
          </a>
          <a href="">
            <i className='fab fa-twitter text-[#2A2C3D]/70 text-[24px] mr-3'>
              <BsTwitter />
            </i>
          </a>
          <a href="">
            <i className='fab fa-instagram text-[#2A2C3D]/70 text-[24px] mr-3'>
              <BsInstagram />
            </i>
          </a>
          <a href="">
            <i className='fab fa-linkedin-in text-[#2A2C3D]/70 text-[24px] mr-3'>
              <BsLinkedin />
            </i>
          </a>
        </div>
      </div>
      <div>

      </div>
      <div className='col-span-5 lg:col-span-1 px-8 my-4'>
        <h6 className='text-[18px] font-semibold text-[#2A2C3D]'>Pages</h6>
        {
          pages.map((page, index) => (
            <p key={index} className='text-[18px] my-3 text-[#2A2C3D]/70'>{page}</p>
          ))
        }
      </div>
      <div className='col-span-5 lg:col-span-1 px-8 my-4'>
        <h6 className='text-[18px] font-semibold text-[#2A2C3D]'>Explore</h6>
        {
          explore.map((explore, index) => (
            <p key={index} className='text-[18px] my-3 text-[#2A2C3D]/70'>{explore}</p>
          ))
        }
      </div>
      <div className='col-span-5 lg:col-span-1 px-8 my-4'>
        <h6 className='text-[18px] font-semibold text-[#2A2C3D]'>Company</h6>
        {
          company.map((company, index) => (
            <p key={index} className='text-[18px] my-3 text-[#2A2C3D]/70'>{company}</p>
          ))
        }
      </div>
    </footer>
  );
};

export default Footer;
