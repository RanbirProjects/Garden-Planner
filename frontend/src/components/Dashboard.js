import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import GardenMap from './garden/GardenMap';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('garden');
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData] = useState({
    temperature: '22°C',
    humidity: '65%',
    forecast: 'Sunny'
  });

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const tabs = [
    { id: 'garden', label: 'Garden Map', icon: '🗺️', color: 'bg-green-100' },
    { id: 'schedule', label: 'Watering Schedule', icon: '💧', color: 'bg-blue-100' },
    { id: 'harvest', label: 'Harvest Log', icon: '📝', color: 'bg-yellow-100' },
    { id: 'tasks', label: 'Tasks', icon: '✅', color: 'bg-purple-100' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'garden':
        return <GardenMap />;
      case 'schedule':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Watering Schedule</h2>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-blue-50 rounded-lg"
              >
                <h3 className="font-semibold text-blue-800">Today's Schedule</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">🌅</span>
                      <span>Morning (6:00 AM)</span>
                    </div>
                    <div className="text-blue-600">Tomatoes, Peppers</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">🌇</span>
                      <span>Evening (6:00 PM)</span>
                    </div>
                    <div className="text-blue-600">Lettuce, Herbs</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-4 bg-blue-50 rounded-lg"
              >
                <h3 className="font-semibold text-blue-800">Upcoming</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>Tomorrow</span>
                    </div>
                    <div className="text-blue-600">Root Vegetables</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">📅</span>
                      <span>Day after</span>
                    </div>
                    <div className="text-blue-600">Fruit Trees</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      case 'harvest':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Harvest Log</h2>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-yellow-50 rounded-lg"
              >
                <h3 className="font-semibold text-yellow-800">Recent Harvests</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">🍅</span>
                      <span>Tomatoes</span>
                    </div>
                    <div className="text-yellow-600">2.5 kg</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">🥬</span>
                      <span>Lettuce</span>
                    </div>
                    <div className="text-yellow-600">1 kg</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-4 bg-yellow-50 rounded-lg"
              >
                <h3 className="font-semibold text-yellow-800">Coming Soon</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">🥕</span>
                      <span>Carrots</span>
                    </div>
                    <div className="text-yellow-600">Ready in 2 weeks</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <span className="mr-2">🥦</span>
                      <span>Broccoli</span>
                    </div>
                    <div className="text-yellow-600">Ready in 3 weeks</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      case 'tasks':
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow rounded-lg p-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Tasks</h2>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-4 bg-purple-50 rounded-lg"
              >
                <h3 className="font-semibold text-purple-800">Today's Tasks</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Water the tomatoes</span>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" />
                    <span>Prune the herbs</span>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="p-4 bg-purple-50 rounded-lg"
              >
                <h3 className="font-semibold text-purple-800">Upcoming Tasks</h3>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    <span>Plant new seedlings - Tomorrow</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">📅</span>
                    <span>Fertilize garden beds - Next week</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl"
        >
          🌱
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-2xl font-bold text-primary-600 hover:text-primary-700 transition-colors duration-200">
                  🌱 Garden Planner
                </Link>
              </div>
            </div>
            {/* Weather Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <div className="text-right">
                <div className="text-sm text-gray-500">Current Weather</div>
                <div className="text-lg font-semibold">{weatherData.temperature}</div>
              </div>
              <div className="text-2xl">
                {weatherData.forecast === 'Sunny' ? '☀️' : '🌧️'}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Welcome Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
      >
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome to Your Garden!</h1>
          <p className="text-gray-600">Manage your garden, track your harvests, and stay on top of your tasks.</p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                  ${
                    activeTab === tab.id
                      ? 'border-primary-500 text-primary-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }
                `}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-6"
          >
            {renderTabContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard; 