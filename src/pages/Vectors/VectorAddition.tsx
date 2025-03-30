import { LineChart, Line, XAxis, YAxis, CartesianGrid, ReferenceDot } from 'recharts';
import React from 'react';

const data1 = [
  { x: 0, y: 0 },
  { x: 1, y: 2 },
];

const data2 = [
  { x: 0, y: 0 },
  { x: 3, y: 1 },
];

const VectorAddition = () => {
  return (
    <LineChart width={400} height={400}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" domain={[-0.2, 3.2]} dataKey="x" />
      <YAxis type="number" domain={[-0.2, 2.2]} dataKey="y" />
      {/* Primeiro vetor */}
      <Line type="linear" data={data1} dataKey="y" stroke="#4CAF50" strokeWidth={2} dot={false} />
      {/* Segundo vetor */}
      <Line type="linear" data={data2} dataKey="y" stroke="#FFC107" strokeWidth={2} dot={false} />
      {/* Adicionando pontos finais */}
      <ReferenceDot x={1} y={2} r={5} fill="#4CAF50" />
      <ReferenceDot x={3} y={1} r={5} fill="#FFC107" />
    </LineChart>
  );
};

export default VectorAddition;
