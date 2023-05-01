import logo from '../assets/logo.png';
import rightRow from '../assets/ArrowRight.png';

interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = ({ }) => {
  return (
    <>
      <nav className='text-white flex items-center justify-between container mx-auto py-10'>
        <div className='flex items-center gap-x-1'>
          <img src={logo} alt="" />
          <p className='font-semibold text-[20px]'>Bubble Bash</p>
        </div>
        <ul className='flex gap-x-6'>
          <li className='text[20px]'>Home</li>
          <li className='text[20px]'>Our Servies</li>
          <li className='text[20px]'>Portfolio</li>
          <li className='text[20px]'>Testimonial</li>
          <li className='text[20px]'>Contact us</li>
        </ul>
      </nav>
      <div className='text-white'>
        <h1 className='text-[64px] mt-12 font-bold text-center'>Create Amazing Digital Product <br />
          For Your Business</h1>
        <p className='text-[18px] leading-relaxed my-12 font-[400] text-center'>We are a professional digital agency that has been established since 2016, we present a variety of
          <br /> digital services that can help you solve problems in your business</p>
        <div className='bg-white flex gap-x-2 items-center mx-auto py-[23px] px-[32px] w-[211px] text-black'>
          <p className='font-[700] text-[20px]'>Get Started</p>
          <img src={rightRow} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
