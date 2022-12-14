import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Results = () => {
  const [results, setResults] = useState()
  useEffect(()=>{
    fetch("https://battery-low.onrender.com/planning")
    .then(res => res.json())
    .then(data => setResults(data))
  },[])
  // console.log("results",results)
  return (
    <div>
      {/* {results.length} */}
      <table className="table w-full text-black">
      {results?.map((result) =>(
        <div className="overflow-x-auto">
          <tbody>
            <tr>
              <th className="p-8">{result?.ProjectDescription}</th>
              <th className="p-8">{result?.Client}</th>
              <th className="p-8">{result?.Contractor}</th>
              <td className="p-8">{result?.xMax}</td>
              <td className="p-8">{result?.xMin}</td>
              <td className="p-8">{result?.yMax}</td>
              <td className="p-8">{result?.yMin}</td>
              <td className="p-8">{result?.zMax}</td>
              <td className="p-8">{result?.zMin}</td>
            </tr>
          </tbody>
          </div>
      ))}
          
          </table>

      <button className="btn mt-10" onClick={() => window.print()}>PRINT</button>

    </div>
  );
};

export default Results;
