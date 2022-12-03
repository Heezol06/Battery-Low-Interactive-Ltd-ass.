import React from "react";

const Results = ({ xMin, xMax, yMin, yMax, zMin, zMax }) => {
  console.log(xMin, xMax, yMin, yMax, zMin, zMax);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead>
            <tr>
              <th className="text-lg capitalize p-8">KP</th>
              <th className="text-lg capitalize p-8">Minimum X</th>
              <th className="text-lg capitalize p-8">Maximum X</th>
              <th className="text-lg capitalize p-8">Minimum Y</th>
              <th className="text-lg capitalize p-8">Maximum Y</th>
              <th className="text-lg capitalize p-8">Minimum Z</th>
              <th className="text-lg capitalize p-8">Maximum Z</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-8">1</th>
              <td className="p-8">{xMin}</td>
              <td className="p-8">{xMax}</td>
              <td className="p-8">{yMin}</td>
              <td className="p-8">{yMax}</td>
              <td className="p-8">{zMin}</td>
              <td className="p-8">{zMax}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
