import React from 'react';
import JosiahPhoto from '../images/josiah.jpg'

export const About = () => {
  return (
    <section id="about">
      <div className="section-content">
        <h2>About Josiah</h2>
        <div id="intro">
          <img src={JosiahPhoto} alt="photo of Josiah Lansford" />
          <p>Hi there, I'm Josiah. I'm a full-stack software developer with a passion for building beautiful solutions that improves people’s lives. I care deeply about best practices, accessibility, and doing things the right way the first time. Looking for a team where I can continuously challenge my technical skills, collaborate with others, and learn everything I can.  If you think I may be a good fit with your project or company, connect with me on <a href="www.linkedin.com/in/josiahlansford">LinkedIn</a>, I would love to chat!</p>
        </div>
        <div id="philosophy">
          <h3>Work Philosophy</h3>
          <p>I care deeply about the quality of my work being an accurate representation of the work ethic I bring to any organization. Below are a few principles that I apply to my work and strive to bring to any team that I am part of:</p>
          <ul>
            <li>If something can be done right, it should be done the right way the first time around.</li>
            <li>Maintainability is just as important as functionality, and "quick fixes" will always take more time in the long run.</li>
            <li>Write better comments. The next person reading your code has no idea what you are doing.</li>
            <li>"This way already works" is a bad excuse to avoid learning a new way of doing something.</li>
            <li>Software should be designed from the perspective of the user, not the engineer.</li>
            <li>Designing the user interface is not an optional step in implementing the functional requirements.</li>
            <li>A11y is a basic requirement of functionality, and should be treated as such.</li>
          </ul>
        </div>
        <div id="skills">
          <h3>Skills</h3>
          <ul>
            <li>Front-end development in React.js using HTML and CSS</li>
            <li>RESTful API development in Python using Flask or Django</li>
            <li>Desktop software development in C++ &amp; QML with Qt 5</li>
            <li>Build dependency management using CMake</li>
            <li>Unit testing using GTest and GMock</li>
            <li>Common developer tools such as Git, Docker, and Postman</li>
            <li>Web servers, basic Linux system administration &amp; networking</li>
            <li>Basic working knowledge of MySQL and DBMS tools</li>
            <li>Video game development in Unreal Engine</li>
            <li>Basic machine learning using Unity 3D and Python</li>
            <li>Proficient in Agile methodologies (Scrum, Kanban, etc.)</li>
            <li>Live Video Production, including Camera Operation and Directing</li>
          </ul>
        </div>
        <div id="experience">
          <h3>Experience</h3>
          <ul>
            <li>2+ years of Software Development experience in C++, Qt, Python and React</li>
            <li>2 years of front-facing Technical Support and Customer Service experience</li>
            <li>3+ years of Live Video Production experience</li>
          </ul>
          <p>To learn more about my professional experience, check out my <a href="https://linkedin.com/in/josiahlansford">LinkedIn Page</a>.</p>
        </div>
        <div id="education">
          <h3>Education</h3>
          <p><b>Cedarville University</b><br />
            Bachelor of Science, GPA 3.98.<br />
            Double Majors in Computer Science, Information Technology Management</p>
        </div>
      </div>
    </section >
  )
}