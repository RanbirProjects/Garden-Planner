import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-extrabold text-gray-900 sm:text-6xl"
          >
            Community Garden Planner
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join your local community in creating and maintaining beautiful garden spaces.
            Plan, organize, and track your garden's growth together.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Link
            to="/dashboard"
            className="btn-primary text-lg px-8 py-3"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Garden Map View',
    description: 'Visualize your garden layout and manage plots efficiently.',
    icon: '🗺️',
  },
  {
    title: 'Watering Schedule',
    description: 'Keep track of watering needs and assign tasks to community members.',
    icon: '💧',
  },
  {
    title: 'Harvest Logging',
    description: 'Record and celebrate your garden\'s bounty with detailed harvest logs.',
    icon: '📝',
  },
];

export default Welcome; 