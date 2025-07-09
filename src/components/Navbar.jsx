import { useState } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaBarsStaggered } from 'react-icons/fa6';

const Navbar = () => {
  const [menu, setMenu] = useState(false)

  const menuHandler = () => {
    setMenu(!menu)
  }

  return (
    <header className="text-white relative z-11">
      <div className="container mx-auto flex justify-between items-center px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <span className="text-[#d1b06b] text-xl font-bold">||</span>
          <span className="text-2xl font-semibold">Judy Attorneys</span>
        </div>
        <div className="sm:flex gap-6 text-sm hidden">
          <div className="flex items-center gap-1"><FaPhone /> 911-987654321</div>
          <div className="flex items-center gap-1"><FaEnvelope /> hello@judylg.com</div>
          <div className="flex items-center gap-3">
            <FaLinkedin className="hover:text-[#d1b06b]" />
            <FaInstagram className="hover:text-[#d1b06b]" />
            <FaFacebookF className="hover:text-[#d1b06b]" />
          </div>
        </div>
        <FaBarsStaggered onClick={menuHandler} className="sm:hidden" />
        {menu && <nav className="absolute top-12 left-0 container bg-amber-50 text-[#d1b06b] flex flex-col justify-start text-lg">
          <a href="/" className="hover:text-[#ffffff] hover:bg-[#d1b06b] px-6 py-2">Home</a>
          <a href="/practice-area" className="hover:text-[#ffffff] hover:bg-[#d1b06b] px-6 py-2">Practice Areas</a>
          <a href="/cases" className="hover:text-[#ffffff] hover:bg-[#d1b06b] px-6 py-2">Cases</a>
          <a href="/about" className="hover:text-[#ffffff] hover:bg-[#d1b06b] px-6 py-2">About</a>
          <a href="/contact" className="hover:text-[#ffffff] hover:bg-[#d1b06b] px-6 py-2">Contact Us</a>
        </nav>}
      </div>
      <nav className="container mx-auto sm:flex hidden justify-start gap-6 px-4 py-2 text-sm">
        <a href="/" className="hover:text-[#d1b06b]">Home</a>
        <a href="/practice-area" className="hover:text-[#d1b06b]">Practice Areas</a>
        <a href="/cases" className="hover:text-[#d1b06b]">Cases</a>
        <a href="/about" className="hover:text-[#d1b06b]">About</a>
        <a href="/contact" className="hover:text-[#d1b06b]">Contact Us</a>
      </nav>
    </header>
  );
};

export default Navbar;