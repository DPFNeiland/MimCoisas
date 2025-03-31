import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceDot } from 'recharts';
import React from 'react';

const data = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
];

const VectorPlot = () => {
  return (
    <LineChart width={400} height={400}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[-0.2, 1.2]} dataKey="x" />
      <YAxis type="number" domain={[-0.2, 2.2]} dataKey="y" />
      <Line type="linear" data={data} dataKey="y" stroke="#0074D9" strokeWidth={2} dot={false} />
      <ReferenceDot x={1} y={2} r={5} fill="#FF4136" />
    </LineChart>
  );
};

export default VectorPlot;
