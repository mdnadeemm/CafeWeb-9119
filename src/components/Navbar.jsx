import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-serif text-brown-600">Café Delight</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brown-600">Home</Link>
            <Link to="/menu" className="text-gray-700 hover:text-brown-600">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-brown-600">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-brown-600">Contact</Link>
          </div>

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700">Home</Link>
            <Link to="/menu" className="block px-3 py-2 text-gray-700">Menu</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700">Contact</Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;