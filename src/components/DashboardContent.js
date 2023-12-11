// components/DashboardContent.js
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import mockData from '../mockdata.ts';

function DashboardContent() {
  // Extract the data from the mockDataWithUnknownsAWS array
  const data = mockDataWithUnknownsAWS[0].serviceEstimates;

  // Calculate total CO2 emissions
  const totalCO2Emissions = data.reduce((total, entry) => total + entry.co2e, 0);

  return (
    <div>
      <h2>CO2 Emissions Dashboard</h2>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" />
          <YAxis dataKey="co2e" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="co2e" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>

      {/* Display total CO2 emissions */}
      <div>
        <h3>Total CO2 Emissions: {totalCO2Emissions}</h3>
      </div>
    </div>
  );
}

export default DashboardContent;
