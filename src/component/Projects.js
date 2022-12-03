import React, { useState, useEffect } from "react";
// import { useCSVReader } from "react-papaparse";
import CSVConvert from "./CSVConvert";

const Projects = () => {
  // console.log(xMin ,xMax, yMin,yMax,zMin,zMax)
  const [items, setItems] = useState([]);
  const [xMin, setXMin] = useState();
  const [xMax, setXMax] = useState();
  const [yMin, setYMin] = useState();
  const [yMax, setYMax] = useState();
  const [zMin, setZMin] = useState();
  const [zMax, setZMax] = useState();
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items) {
      setItems(items);
    }
  }, []);
  console.log(items);
  return (
    <div class="hero min-h-screen text-white">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">ABC Company.</h1>
          <p class="py-6">
            ABC company planning to develop a system for the oil and gas
            industry. This is the prototype of this company.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-100">
          <div class="card-body">
            <div class="form-control">
              <label class="label">
                <span class="label-text">File Upload</span>
              </label>
              <div className="file-wrapper">
                <CSVConvert
                  setXMax={setXMax}
                  setXMin={setXMin}
                  setYMax={setYMax}
                  setYMin={setYMin}
                  setZMax={setZMax}
                  setZMin={setZMin}
                ></CSVConvert>
              </div>
            </div>
            <div class="form-control text-black">
              <label class="label">
                <span class="label-text">max_X</span>
              </label>
              <input
                type="number"
                value={xMax}
                placeholder="max_X"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">min_X</span>
              </label>
              <input
                type="number"
                placeholder="min_X"
                value={xMin}
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">max_Y</span>
              </label>
              <input
                type="number"
                value={yMax}
                placeholder="max_Y"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">min_y</span>
              </label>
              <input
                type="number"
                placeholder="min_y"
                value={yMin}
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">max_Z</span>
              </label>
              <input
                type="number"
                value={zMax}
                placeholder="max_Z"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">min_Z</span>
              </label>
              <input
                type="number"
                value={zMin}
                placeholder="min_Z"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-error">Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
