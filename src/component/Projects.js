import React from "react";
import { useForm } from "react-hook-form";
import CSVConvert from "./CSVConvert";

const Projects = ({
  planning,
  setPlanningProject,
  xMin,
  xMax,
  yMin,
  yMax,
  zMin,
  zMax,
  setXMin,
  setXMax,
  setYMin,
  setYMax,
  setZMin,
  setZMax,
  setCSVData
}) => {
  // console.log(planning);
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) =>{
    // send data to the server 
    fetch("http://localhost:5000/planning",{
      method: "POST",
      headers:{
        "content-Type": "application/json"
      }, 
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      setPlanningProject(data)
    })
    // console.log(data);
    }

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
          <form class="card-body" onSubmit={handleSubmit(onSubmit)}>
            {/* Project planning  */}
            <h1 className="text-2xl text-start text-black font-bold">
              Company Plannings
            </h1>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Project Name</span>
              </label>
              <input
                type="text"
                name="ProjectName"
                {...register("ProjectName")}
                value={planning.ProjectName}
                placeholder="Project Name"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Project Description</span>
              </label>
              <input
                type="text"
                name="ProjectDescription"
                {...register("ProjectDescription")}
                value={planning.ProjectDescription}
                placeholder="Project Description"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Client</span>
              </label>
              <input
                type="text"
                name="Client"
                {...register("Client")}
                value={planning.Client}
                placeholder="Client"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Contractor</span>
              </label>
              <input
                type="text"
                name="Contractor"
                {...register("Contractor")}
                value={planning.Contractor}
                placeholder="Contractor"
                class="input input-bordered text-black"
              />
            </div>



            {/* csv data's */}
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
                  setCSVData={setCSVData}
                ></CSVConvert>
              </div>
            </div>
            <div class="form-control text-black">
              <label class="label">
                <span class="label-text">max_X</span>
              </label>
              <input
                type="number"
                {...register("max_X")}
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
                {...register("min_X")}
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
                {...register("max_Y")}
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
                {...register("min_y")}
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
                {...register("max_Z")}
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
                {...register("min_Z")}
                value={zMin}
                placeholder="min_Z"
                class="input input-bordered text-black"
              />
            </div>
            <div class="form-control mt-6">
            <input
                type="submit"
                className="btn btn-outline bg-red-400 text-white"
                value="Submit"
              />
              {/* <button class="btn btn-error">Submit</button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Projects;
