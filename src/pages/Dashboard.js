import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row } from "react-bootstrap";
import { Select } from "../components/form";
import { createProject } from "../events";

function Dashboard({ projects }) {
  return (
    <React.Fragment>
      <div className="d-sm-flex align-items-center justify-content-between">
        <h1 className="h3 mb-0 text-gray-800">Projects</h1>
        <Button className="px-4 my-4" onClick={createProject.call}>New Project</Button>
      </div>

      <Row>
        <Select
          options={["name"]}
          label="sort"
          style={{ maxWidth: "200px" }}
        />
      </Row>

      <div className="row">
        { projects.map(project =>
          <div className="col-xl-3 col-md-6 mb-4" key={project.id}>
            <div className="card border-left-primary shadow h-100 py-2">
              <div className="card-body">
                <Link to={`/app/project/${project.id}`}>
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="h5 mb-0 font-weight-bold text-gray-800 text-uppercase">
                        { project.name }
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
