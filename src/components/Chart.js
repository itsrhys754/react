// components/Chart.js

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Category A', value: 2400 },
  { name: 'Category B', value: 4567 },
  { name: 'Category C', value: 1398 },
  { name: 'Category D', value: 9800 },
  // Add more data points as needed
];

function Chart() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Chart;
