import React from "react";
import { projects } from "@/utils/consts";

const ProjectsSection: React.FC = () => {
  return (
    <section className="container py-5">
      <h2 className="text-center fw-bold mb-5 display-5" id="myWork">My Projects</h2>
      <div className="row g-4">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 rounded-2 glow">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title fw-semibold">{project.name}</h5>
                <p className="card-text text-muted mb-2">{project.description}</p>
                <div className="mb-3">
                  {project.stacks.map((stack, i) => (
                    <span key={i} className="badge bg-secondary me-1 mb-1">
                      {stack.trim()}
                    </span>
                  ))}
                </div>
                <div className="mt-auto d-flex justify-content-between">
                  {project.github && (
                    <a
                      href={project.github}
                      className="btn btn-outline-dark btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      className="btn btn-outline-dark btn-sm"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
