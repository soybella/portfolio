import React from "react";
import bobaDateProject from "./images/boba-date-project.png";
import todoListProject from "./images/todo-list-project.png";
import "./Projects.css";

export default function CurrentProjects() {
  return (
    <div className="CurrentProjects">
      <h2 className="header container text-center">Current Projects</h2>
      <div className="container projects-container">
        <div className="row">
          <div className="col-md-6 portfolio-project-image d-md-block">
            <img
              src={bobaDateProject}
              className="img-fluid portfolio-project-image border-0"
              alt="#"
            />
          </div>
          <div className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
            <h3 className="mt-3">Boba Date</h3>
            <p className="p-2 m-3 text-center">
              A simple decision making website that uses vanilla HTML,
              Javascript, and advanced CSS techniques to find your next go-to
              bubble tea order.
            </p>
            <div className="project-skills-icons pt-2">
              <ul className="d-flex p-0 justify-content-center">
                <ul className="d-flex p-0 justify-content-center">
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-html5"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-css3-alt"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-square-js"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i class="fa-solid fa-mobile-screen-button"></i>
                  </li>
                </ul>
              </ul>
              <ul className="d-flex justify-content-center project-button responsive-project-button pt-3">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-boba-date.netlify.app/"
                    className="button-link"
                    title="Boba Date Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button">
                  <a
                    href="https://github.com/soybella/boba-date"
                    className="button-link"
                    title="Boba Date Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block project-description">
            <h3 className="p-2 mb-3 text-start">Boba Date</h3>
            <p className="p-2 m-0 text-start">
              A simple decision making website that uses vanilla HTML,
              Javascript, and advanced CSS techniques to find your next go-to
              bubble tea order.
            </p>
            <div className="project-skills-icons pt-4">
              <ul className="d-flex p-0 justify-content-start">
                <p className="p-2">Technologies: </p>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-html5"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-css3-alt"></i>
                </li>
                <li className="skills-icon p-2">
                  <i className="fa-brands fa-square-js"></i>
                </li>
                <li className="skills-icon p-2">
                  <i class="fa-solid fa-mobile-screen-button"></i>
                </li>
              </ul>
              <ul className="d-flex justify-content-start project-button px-0">
                <li className="project-button">
                  <a
                    href="https://isabellalizarde-boba-date.netlify.app/"
                    className="button-link"
                    title="Boba Date Website"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Live
                  </a>
                </li>
                <li className="project-button ps-3">
                  <a
                    href="https://github.com/soybella/boba-date"
                    className="button-link"
                    title="Boba Date Github Repository"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="WorldClockProject">
        <div className="container projects-container">
          <div className="row">
            <div className="col-lg-6 d-none d-lg-block project-description">
              <h3 className="p-2 mb-3 text-end">ToDo List</h3>
              <p className="p-2 m-0 text-end">
                A web app that uses advanced elements of JavaScript to display a
                clock with times from different places around the world.
              </p>
              <div className="project-skills-icons pt-4">
                <ul className="d-flex p-0 justify-content-end">
                  <p className="p-2">Technologies: </p>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-html5"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-css3-alt"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-square-js"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-bootstrap"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-react"></i>
                  </li>
                </ul>
                <ul className="d-flex justify-content-end project-button">
                  <li className="project-button pe-3">
                    <a
                      href="https://isabellalizarde-todo-list-project.netlify.app/"
                      className="button-link"
                      title="World Clock Website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live
                    </a>
                  </li>
                  <li className="project-button">
                    <a
                      href="https://github.com/soybella/World-clock"
                      className="button-link"
                      title="World Clock Project Github Repository"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 portfolio-project-image d-md-block">
              <img
                src={todoListProject}
                className="img-fluid portfolio-project-image border-0"
                alt="#"
              />
            </div>
            <div className="responsive-project-description d-sm-block d-lg-none project-description pt-3">
              <h3 className="mt-3">World Clock</h3>
              <p className="p-2 m-3 text-center">
                A web app that uses advanced elements of JavaScript to create
                display a clock with times from different places around the
                world.
              </p>
              <div className="project-skills-icons pt-2">
                <ul className="d-flex p-0 justify-content-center">
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-html5"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-css3-alt"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-square-js"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-bootstrap"></i>
                  </li>
                  <li className="skills-icon p-2">
                    <i className="fa-brands fa-react"></i>
                  </li>
                </ul>
                <ul className="d-flex justify-content-center responsive-project-button project-button pt-3">
                  <li className="project-button">
                    <a
                      href="https://isabellalizarde-world-clock.netlify.app/"
                      className="button-link "
                      title="World Clock Website"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Live
                    </a>
                  </li>
                  <li className="project-button">
                    <a
                      href="https://github.com/soybella/World-clock"
                      className="button-link"
                      title="World Clock Github Repository"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
