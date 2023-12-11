// components/DashboardContent.js
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: '2022-01-01', co2Emissions: 2200 },
  { date: '2022-02-01', co2Emissions: 2800 },
  { date: '2022-03-01', co2Emissions: 1200 },
  { date: '2022-04-01', co2Emissions: 2000 },
  { date: '2022-05-01', co2Emissions: 2800 },
  { date: '2022-06-01', co2Emissions: 3200 },
  // Add more data points as needed
];

function DashboardContent() {
  // Calculate total CO2 emissions
  const totalCO2Emissions = data.reduce((total, entry) => total + entry.co2Emissions, 0);

  return (
    <div>
      <h2>CO2 Emissions Dashboard</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis dataKey="co2Emissions" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="co2Emissions" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      {/* Display total CO2 emissionsa */}
      <div>
        <h3>Total CO2 Emissions: {totalCO2Emissions}</h3>
      </div>
    </div>
  );
}

export default DashboardContent;
