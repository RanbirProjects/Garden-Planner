import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GardenMap = () => {
  const [selectedPlot, setSelectedPlot] = useState(null);

  const plots = [
    { id: 1, name: 'Plot A', crops: ['Tomatoes', 'Basil'], status: 'Growing', size: '4x4m' },
    { id: 2, name: 'Plot B', crops: ['Lettuce', 'Carrots'], status: 'Ready to Harvest', size: '3x3m' },
    { id: 3, name: 'Plot C', crops: ['Peppers', 'Onions'], status: 'Growing', size: '4x3m' },
    { id: 4, name: 'Plot D', crops: ['Potatoes', 'Garlic'], status: 'Planted', size: '3x3m' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const plotVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Garden Layout</h2>
        <div className="relative bg-green-50 rounded-lg p-4 h-[400px]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 gap-4 h-full"
          >
            {plots.map((plot) => (
              <motion.div
                key={plot.id}
                variants={plotVariants}
                whileHover="hover"
                onClick={() => setSelectedPlot(plot)}
                className={`
                  cursor-pointer rounded-lg p-4
                  ${plot.status === 'Ready to Harvest' ? 'bg-yellow-100' : 
                    plot.status === 'Growing' ? 'bg-green-100' : 'bg-blue-100'}
                  border-2 ${selectedPlot?.id === plot.id ? 'border-primary-500' : 'border-transparent'}
                `}
              >
                <h3 className="font-semibold text-lg">{plot.name}</h3>
                <p className="text-sm text-gray-600">Size: {plot.size}</p>
                <p className="text-sm text-gray-600">Status: {plot.status}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Plot Details */}
      {selectedPlot && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="bg-white shadow rounded-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">{selectedPlot.name} Details</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Crops</h4>
                <ul className="mt-2 space-y-2">
                  {selectedPlot.crops.map((crop, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center"
                    >
                      <span className="mr-2">🌱</span>
                      {crop}
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900">Status</h4>
                <p className="mt-2 text-gray-600">{selectedPlot.status}</p>
                <p className="mt-2 text-gray-600">Size: {selectedPlot.size}</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900">Maintenance Schedule</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-center">
                  <span className="mr-2">💧</span>
                  Watering: Every 2 days
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌡️</span>
                  Temperature: 20-25°C
                </li>
                <li className="flex items-center">
                  <span className="mr-2">🌞</span>
                  Sunlight: 6-8 hours daily
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      )}

      {/* Garden Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow rounded-lg p-6"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-4">Garden Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-green-50 p-4 rounded-lg"
          >
            <h4 className="font-semibold text-green-800">Total Plots</h4>
            <p className="text-2xl font-bold text-green-600">{plots.length}</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-50 p-4 rounded-lg"
          >
            <h4 className="font-semibold text-yellow-800">Ready to Harvest</h4>
            <p className="text-2xl font-bold text-yellow-600">
              {plots.filter(p => p.status === 'Ready to Harvest').length}
            </p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-4 rounded-lg"
          >
            <h4 className="font-semibold text-blue-800">Total Crops</h4>
            <p className="text-2xl font-bold text-blue-600">
              {plots.reduce((acc, plot) => acc + plot.crops.length, 0)}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default GardenMap; 