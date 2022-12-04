import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { curveCardinal } from "d3-shape";

const Chart = ({ CSVData }) => {
//   const x = CSVData.map((d) => d[0]);
//   const y = CSVData.map((d) => d[1]);
//   console.log(CSVData)
  
let x = [];
let y = [];
let z = [];
for (let i = 0; i < CSVData.length; i++) {
  x.push(CSVData[i][1]);
  y.push(CSVData[i][2]);
  z.push(CSVData[i][3]);
}
x.shift();
y.shift();
z.shift();
x.pop();
y.pop();
z.pop();

for (let i = 0; i < x.length; i++) {
  x[i] = parseFloat(x[i]);
  y[i] = parseFloat(y[i]);
  z[i] = parseFloat(z[i]);
}
  console.log(x,y,z)

  const data = [
    {
      name: "kp",
      uv: 4,
      pv:10
    },
    {
      name: "x",
      uv: 10,
    },
    {
      name: "y",
      uv: 1,
    },
  ];
  const cardinal = curveCardinal.tension(0.2);

  return (
    <div>
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.3}
        />
        <Area
          type={cardinal}
          dataKey="uv"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.3}
        />
      </AreaChart>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
        eligendi!
      </h1>
    </div>
  );
};

export default Chart;
