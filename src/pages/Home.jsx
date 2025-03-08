import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { FiCoffee, FiClock, FiMapPin } from 'react-icons/fi';

const Home = () => {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <FiCoffee className="mx-auto text-4xl text-brown-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Coffee</h3>
              <p className="text-gray-600">Sourced from the finest beans</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <FiClock className="mx-auto text-4xl text-brown-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Open Daily</h3>
              <p className="text-gray-600">7:00 AM - 8:00 PM</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-center p-6"
            >
              <FiMapPin className="mx-auto text-4xl text-brown-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-600">123 Coffee Street</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;