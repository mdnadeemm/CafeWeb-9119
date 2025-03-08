import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          filter: 'brightness(0.7)'
        }}
      />
      
      <div className="relative h-full flex items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-4">Café Delight</h1>
          <p className="text-xl md:text-2xl mb-8">Where every cup tells a story</p>
          <button className="bg-brown-600 text-white px-8 py-3 rounded-full hover:bg-brown-700 transition-colors">
            View Menu
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;