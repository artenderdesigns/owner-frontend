import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation to access the state

function ProjectWork() {
  const location = useLocation(); // Get the location object
  const { project } = location.state; // Destructure the project from the state

  return (
    <>
      <div className="project-details text-white">
        {/* <div className="m-10">
            <h1 className="text-center text-3xl font-bold">{project.name}</h1>
          </div> */}
        <div className="flex justify-center ">
          <div className="project-image mt-4 w-1/2 mb-4 flex justify-center">
            <img
              className="w-full h-[500px] object-cover rounded-lg m-10"
              src={project.src}
              alt={project.alt}
            />
          </div>
          <div className="project-description w-1/2 ">
            <div className="flex justify-center items-center">
              <h1>{project.name}</h1>
            </div>

            <div>
              <h2>Project Name : {project.name}</h2>
            </div>
            <div>
              <p className="text-lg">{project.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectWork;
