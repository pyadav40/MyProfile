import React from 'react';

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>Piyush Yadav</h1>
        <h2>Front-End Developer</h2>
        <p>Email: piyushyadav@live.com | Phone:9993444568</p>
      </header>
      <main>
        <section>
          <h3>Summary</h3>
          <p>
          Front End Developer with two years of experience working with JavaScript, HTML/CSS to deliver exceptional customer experiences. Adept at contributing to a highly collaborative work environment, finding solutions, and determining customer satisfaction
          </p>
        </section>
        <section>
          {/* <h3>Experience</h3>
          <h4>Lead Developer</h4>
          <p>ACME Inc., San Francisco, CA</p>
          <p>
            <em>January 2020 - Present</em>
          </p>
          <ul>
            <li>
              Led a team of developers in building and maintaining a high-traffic
              e-commerce platform using React, Node.js, and express.js.
            </li>
            <li>
              Implemented new features and optimized existing ones to improve
              site performance and user experience.
            </li>
            <li>
              Worked with the design team to implement responsive design and
              ensure optimal display on all devices.
            </li>
          </ul>
          <h4>Full Stack Developer</h4>
          <p>XYZ Corp., Los Angeles, CA</p>
          <p>
            <em>June 2017 - December 2019</em>
          </p>
          <ul>
            <li>
              Built and maintained multiple full-stack web applications using
              React, Node.js, and express.js.
            </li>
            <li>
              Worked with the product team to gather requirements and implement
              new features.
            </li>
            <li>
              Debugged and resolved production issues in a timely manner.
            </li>
          </ul>
        </section>
        <section> */}
          <h3>Skills</h3>
          <ul>
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML/CSS</li>
            <li>REST APIs</li>
            <li>Git</li>
          </ul>
        </section>
        <section>
          <h3>Education</h3>
          <h4>M.Tech in Digital Communication</h4>
          <p>RGPV, Bhopal</p>
          <p>
            <em>July 2012 - Dec 2014</em>
          </p>
        </section>
      </main>
    </div>
  );
  }
export default Resume