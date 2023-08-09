import React from "react";
import Skills from "./Skills.js";
import Projects from "./Projects.js";
import Contact from "./Contact.js";
import profilePhoto from "./images/temp-profile-photo.jpeg";

export default function Main() {
  return (
    <div className="Main" id="about">
      <div className="container about-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-header">
              <h2 className="mb-4">About Me</h2>
              <h5 className="mb-3">Hello World!</h5>
              <p>
                My name is Isabella Lizarde, and I'm a Front-end Web Developer
                based in California 🇺🇸 <br /> <br />
              </p>
            </div>
            <div className="about-bio">
              <p>
                I've always had a passion for creating beautiful works of art
                and bringing things to life visually. As a former art major, I
                believe that Front-end development is a perfect combination of
                art and logic, and I truly enjoy creating engaging, user
                friendly websites. <br /> <br /> When I'm not coding, I like to
                spend my free time with my dogs, listening to music, or catching
                up on the most recent video game I've been playing!
              </p>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <img
              src={profilePhoto}
              className="img-fluid portfolio-profile-image"
              alt="Isabella Lizarde"
            />
          </div>
        </div>
      </div>
      <Skills />
      <br />
      <Projects />
      <br />
      <Contact />
    </div>
  );
}
