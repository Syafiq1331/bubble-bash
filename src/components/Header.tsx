import React from 'react';
import Navbar from './Navbar';
import Intro from './Intro';

interface HeaderProps { }

const Header: React.FC<HeaderProps> = ({ }) => {
  return (
    <>
      <header className='bg-[#2F6B4F] h-screen'>
        <Navbar />
      </header>
      <Intro />
    </>
  );
};

export default Header;
