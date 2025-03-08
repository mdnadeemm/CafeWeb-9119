import { motion } from 'framer-motion';

const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", price: "3.50", description: "Rich and bold" },
      { name: "Cappuccino", price: "4.50", description: "Espresso with steamed milk foam" },
      { name: "Latte", price: "4.75", description: "Espresso with steamed milk" }
    ]
  },
  {
    category: "Pastries",
    items: [
      { name: "Croissant", price: "3.75", description: "Buttery and flaky" },
      { name: "Muffin", price: "3.25", description: "Freshly baked daily" },
      { name: "Danish", price: "3.95", description: "Sweet and delicate" }
    ]
  }
];

const Menu = () => {
  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-serif text-center mb-12">Our Menu</h1>
        
        {menuItems.map((section, index) => (
          <motion.div
            key={section.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-semibold mb-6">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white p-6 rounded-lg shadow-sm"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-medium">{item.name}</h3>
                      <p className="text-gray-600 mt-1">{item.description}</p>
                    </div>
                    <span className="text-brown-600 font-medium">${item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Menu;