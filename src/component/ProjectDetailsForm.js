import React, { useState } from "react";
import backgroundImg from "../asset/abstract-background-with-red-lines.jpg";
import CompanyPlanning from "./CompanyPlanning";
import Projects from "./Projects";

const ProjectDetailsForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    ProjectName: "",
    ProjectDescription: "",
    Client: "",
    Contractor: "",
  });
  const FormTitles = ["Sign Up", "Personal Info", "Other"];
  const PageDisplay = () => {
    if (page === 0) {
      return <CompanyPlanning formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <Projects formData={formData} setFormData={setFormData} />;
    }
  };
  return (
    <div style={{ backgroundImage: `url(${backgroundImg})` }}>
      <h1 className="text-3xl font-bold text-white">{FormTitles[page]}</h1>
      <div
        style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
      ></div>
      <div class="hero min-h-screen text-white">
      {PageDisplay()}
      </div>
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
              // console.log(formData);
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
