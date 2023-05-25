import React from "react";
import "./project.css";
import { RiStackLine } from "react-icons/ri";
import ProductList from "./Project-filter";
const Projects = () => {
  return (
    <>
      <div className="project">
        <div className="project-title">
          <div className="project-left">
            <h1>
              Projects.
              <span>
                <RiStackLine />
              </span>
            </h1>
          </div>
          <div className="project-right">
            <p>
              By exploring our project section, you can gain a deeper
              understanding of our track record. We also provide insights into
              the technologies and methodologies we utilized to ensure optimal
              performance and client satisfaction.
            </p>
          </div>
        </div>
        <ProductList />
      </div>
    </>
  );
};

export default Projects;
