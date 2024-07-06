import React from 'react';
import Layout from '../Layout/Layout';
import ChartShow from './ChartShow';// Adjust path as per your file structure

const Stats = () => {
  return (
    <Layout>
      <h1 className="text-center mb-6 text-1xl font-extrabold text-white md:text-1xl lg:text-4xl">
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-600">
      Stats
    </span>
    </h1>

    <p className="text-lg font-serif font-bold text-sky-800 lg:text-xl mx-4">
  Explore compelling statistics on obesity-related deaths and their impacts on public health. Our detailed charts and data insights provide valuable information to raise awareness and promote healthier lifestyle choices. Stay informed with In Take Care's comprehensive health statistics.
</p>



      <div className="max-w-4xl mx-auto p-6 bg-gray-100 dark:bg-gray-900 rounded-lg shadow-lg mt-20 mb-5 mt-4">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Deaths Per Year in India Due to Obesity</h2>
        <div className="mt-8">
          <ChartShow />
        </div>
      </div>
     
    </Layout>
  );
};

export default Stats;
