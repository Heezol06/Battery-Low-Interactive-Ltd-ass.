import React, { useRef,CSSProperties } from 'react';
import { useCSVReader } from 'react-papaparse';
import CSVChart from './CSVChart';






const Projects = () => {
    const { CSVReader } = useCSVReader();


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
                <div className='file-wrapper'>
                <CSVChart></CSVChart>
                </div>
              </div>
                {/* <CSVReader
                 ref={buttonRef}
                 onFileLoad={handleOnFileLoad}
                onError={handleOnError}
                // onClick
                onRemoveFile={handleOnRemove}
                >

                </CSVReader> */}
              <div class="form-control">
                <label class="label">
                  <span class="label-text">max_X</span>
                </label>
                <input
                  type="number"
                  placeholder="max_X"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">min_X</span>
                </label>
                <input
                  type="number"
                  placeholder="min_X"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">max_Y</span>
                </label>
                <input
                  type="number"
                  placeholder="max_Y"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">min_y</span>
                </label>
                <input
                  type="number"
                  placeholder="min_y"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">max_Z</span>
                </label>
                <input
                  type="number"
                  placeholder="max_Z"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">min_Z</span>
                </label>
                <input
                  type="number"
                  placeholder="min_Z"
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

export default Projects;