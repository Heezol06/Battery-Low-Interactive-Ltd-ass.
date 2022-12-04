import React, { useState } from "react";
import backgroundImg from "../asset/abstract-background-with-red-lines.jpg";
import Chart from "./Chart";
import CompanyPlanning from "./CompanyPlanning";
import Projects from "./Projects";
import Results from "./Results";

const ProjectDetailsForm = () => {
  const [xMin, setXMin] = useState(" ");
  const [xMax, setXMax] = useState(" ");
  const [yMin, setYMin] = useState(" ");
  const [yMax, setYMax] = useState(" ");
  const [zMin, setZMin] = useState(" ");
  const [zMax, setZMax] = useState(" ");
  const [page, setPage] = useState(0);
  const [planning, setPlanning] = useState({});
  const [CSVData, setCSVData] = useState([])


  const FormTitles = ["Company Planning", "CSV Info", "Results", "Chart"];
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <CompanyPlanning
          setPlanning={setPlanning}
        />
      );
    } else if (page === 1) {
      return (
        <Projects
          xMin={xMin}
          xMax={xMax}
          yMin={yMin}
          yMax={yMax}
          zMin={zMin}
          zMax={zMax}
          setXMax={setXMax}
          setXMin={setXMin}
          setYMax={setYMax}
          setYMin={setYMin}
          setZMax={setZMax}
          setZMin={setZMin}
          planning={planning}
          setCSVData={setCSVData}
        />
      );
    } else if (page === 2) {
      return (
        <Results
        />
      );
    }
    else if (page === 3) {
      return (
        <Chart
        CSVData={CSVData}
        />
      );
    }
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className="text-3xl font-bold text-white">{FormTitles[page]}</h1>
      {/* <div
        style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
      ></div> */}
      <div class="hero min-h-screen text-white">{PageDisplay()}</div>
      <div className="flex mx-10 justify-around py-10">
        <button
          className="btn text-white btn-secondary"
          disabled={page == 0}
          onClick={() => {
            setPage((currPage) => currPage - 1);
          }}
        >
          Previous
        </button>
        <button
          className="btn text-white btn-accent"
          disabled={page === FormTitles.length - 1}
          onClick={() => {
            if (page === FormTitles.length - 1) {
              alert("FORM SUBMITTED");
            } else {
              setPage((currPage) => currPage + 1);
            }
          }}
        >
          {page === FormTitles.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default ProjectDetailsForm;
