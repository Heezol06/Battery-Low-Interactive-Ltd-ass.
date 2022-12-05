import React from "react";
import { useForm } from "react-hook-form";

const CompanyPlanning = ({setPlanning}) => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) =>{
    setPlanning(data)
    }
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">ABC Company.</h1>
          <p className="py-6">
            ABC company planning to develop a system for the oil and gas
            industry. This is the prototype of this company.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body text-black">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Name</span>
              </label>
              <input
                type="text"
                {...register("ProjectName")}
                placeholder="Project Name"
                className="input input-bordered "
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Project Description</span>
              </label>
              <input
                type="text"
                {...register("ProjectDescription")}
                placeholder="Project Description"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Client</span>
              </label>
              <input
                type="text"
                {...register("Client")}
                placeholder="Client"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contractor</span>
              </label>
              <input
                type="text"
                {...register("Contractor")}
                placeholder="Contractor"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                className="btn btn-outline bg-red-400 text-white"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompanyPlanning;
