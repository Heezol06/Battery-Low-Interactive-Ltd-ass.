import React from "react";
import { useEffect } from "react";

const Results = ({ xMin, xMax, yMin, yMax, zMin, zMax, planning }) => {
  useEffect(()=>{
    fetch("http://localhost:5000/planning")
    .then(res => res.json())
    .then(data => console.log(data))
  },[])
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-black">
          <thead>
            <tr>
              <th className="text-lg capitalize p-8">Project Description</th>
              <th className="text-lg capitalize p-8">Client</th>
              <th className="text-lg capitalize p-8">Contractor</th>
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
              <th className="p-8">{planning.ProjectDescription}</th>
              <th className="p-8">{planning.Client}</th>
              <th className="p-8">{planning.Contractor}</th>
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

      <button className="btn mt-10" onClick={() => window.print()}>PRINT</button>

    </div>
  );
};

export default Results;
