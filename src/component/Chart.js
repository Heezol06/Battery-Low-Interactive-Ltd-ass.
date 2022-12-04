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
let kp = [];
  let x = [];
  for (let i = 0; i < CSVData.length; i++) {
    kp.push(CSVData[i][0]);
    x.push(CSVData[i][1]);
  }
  kp.shift();
  kp.pop();
  x.shift();
  x.pop();
  for (let i = 0; i < kp.length; i++) {
    kp[i] = parseFloat(kp[i]);
    x[i] = parseFloat(x[i]);
  }

  const data = kp.map((z, i) => {
    return { name: kp[i], uv: x[i] };
  });
  const cardinal = curveCardinal.tension(0.2);

  return (
    <div>
      <h1 className="text-2xl">
        CSV File Data Chart
      </h1>
      <AreaChart
        width={1500}
        height={600}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="F2E5E5"
          fill="F2E5E5"
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
    </div>
  );
};

export default Chart;
