import React from 'react';

const CompanyPlanning = () => {
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
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Project Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Project Name"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Project Description</span>
                </label>
                <input
                  type="text"
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
                  placeholder="Contractor"
                  class="input input-bordered"
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

export default CompanyPlanning;