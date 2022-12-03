import React from "react";
import { useForm } from "react-hook-form";

const CompanyPlanning = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) =>{
    
    }
  return (
    <div>
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
          <h1 class="text-5xl font-bold">ABC Company.</h1>
          <p class="py-6">
            ABC company planning to develop a system for the oil and gas
            industry. This is the prototype of this company.
          </p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-red-100">
          <form onSubmit={handleSubmit(onSubmit)} class="card-body text-black">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Project Name</span>
              </label>
              <input
                type="text"
                {...register("ProjectName")}
                placeholder="Project Name"
                class="input input-bordered "
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Project Description</span>
              </label>
              <input
                type="text"
                {...register("ProjectDescription")}
                placeholder="Project Description"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Client</span>
              </label>
              <input
                type="text"
                {...register("Client")}
                placeholder="Client"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Contractor</span>
              </label>
              <input
                type="text"
                {...register("Contractor")}
                placeholder="Contractor"
                class="input input-bordered"
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
