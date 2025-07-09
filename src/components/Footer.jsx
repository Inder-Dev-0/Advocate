import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 border-b border-gray-700 pb-8">
        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            <span className="text-[#d1b06b] font-bold">▮▮</span> Judy Attorneys
          </h2>
          <h3 className="font-semibold mb-2 text-lg">Contact Us</h3>
          <p className="text-sm text-gray-400 mb-1">Attorney Law Office, 121 King Street, Las Vegas 90027, USA.</p>
          <p className="text-sm text-gray-400 mb-1">Phone: (011) 9876 54321</p>
          <p className="text-sm text-gray-400">Email: hello@judylg.com</p>
        </div>

        {/* Quick Link */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Link</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Pricing</li>
            <li>Testimonial</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Utility Pages</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Practice Areas</li>
            <li>Settlements</li>
            <li>Cases</li>
            <li>FAQ</li>
            <li>Help Center</li>
          </ul>
        </div>

        {/* Practice Area */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Practice Area</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Business Law</li>
            <li>Construction Law</li>
            <li>Car Accident</li>
            <li>Criminal Law</li>
            <li>Family Law</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 px-4">
        <p>Copyright © Judy Attorneys 2023</p>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <span className="text-white mr-2">Follow :</span>
          <FaFacebookF className="hover:text-[#d1b06b] cursor-pointer" />
          <FaTwitter className="hover:text-[#d1b06b] cursor-pointer" />
          <FaInstagram className="hover:text-[#d1b06b] cursor-pointer" />
          <FaPinterestP className="hover:text-[#d1b06b] cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;