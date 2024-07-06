import React, { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import { Chart, BarElement, LinearScale, CategoryScale, Title } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components
Chart.register(BarElement, LinearScale, CategoryScale, Title);

const ChartShow = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('data.xlsx');
        if (!response.ok) {
          throw new Error(`Failed to fetch data.xlsx: ${response.status} ${response.statusText}`);
        }
  
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(new Uint8Array(arrayBuffer), { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const excelData = XLSX.utils.sheet_to_json(sheet, { header: 'A' }); // Header: 1 for automatic header detection
  
       
        const years = excelData.map((row) => row['A']); // 'A' corresponds to 'Year'
        const deaths = excelData.map((row) => row['B']); 
  
       
  
      setChartData({
          labels: years,
          datasets: [
            {
              label: 'Obesity Vs Death in India',
              data: deaths,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching or parsing data:', error);
      }
    };
  
    fetchData();
  }, []);

  const options = {
    scales: {
      x: {
        type: 'category',
        labels: chartData ? chartData.labels : [],
        ticks: { // Set color property within the 'ticks' object
          color: 'white', // Change the color to white
        },
      },
     y: {
      beginAtZero: true,
      ticks: {
        color: 'white', // Change y-axis label color to white
      },
    },
  },
  };

  console.log('Chart Data:', chartData); // Log chart data to verify before rendering

  return (
    <div>
    
      {chartData ? <Bar data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
};

export default ChartShow;
