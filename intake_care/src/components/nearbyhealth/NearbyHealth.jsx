import React from 'react';
import Layout from '../Layout/Layout';
import Map from '../map/Map';// Adjust path as per your file structure

const NearbyHealth = () => {
  return (
    <Layout>
    
      <h1 className="text-center mb-6 text-1xl font-extrabold text-white md:text-1xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
      Explore
    </span>
    </h1>
    <p className="text-lg font-serif font-bold text-sky-800 lg:text-xl mx-4">
  Discover nearby gyms and fitness centers with our interactive map feature. Easily locate the closest facilities, view amenities, and plan your fitness routines conveniently. Explore a healthier lifestyle with In Take Care’s gym locator tool.
</p>

      <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg mt-20 mb-5 mt-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Welcome to My App</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">Explore our services and information.</p>
        <div className="mt-8">
          <Map />
        </div>
      </div>
    </Layout>
  );
};

export default NearbyHealth;
