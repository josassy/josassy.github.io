import React from 'react';
import JosiahPhoto from '../images/josiah.jpg'

export const About = () => {
  return (
    <section id="about">
      <div className="section-content">
        <h2>About Josiah</h2>
        <div className="flex-container" id="intro">
          <img src={JosiahPhoto} alt="Josiah Lansford" />
          <p>Hi there, I'm Josiah. I'm a passionate full-stack developer with an eye for a design and a crush on clean code. I love to create beautiful solutions that make people's lives better, and have a demonstrated history of working with customers and within my team to exceed expectations. If you think I may be a good fit with your project or company, connect with me on <a href="www.linkedin.com/in/josiahlansford">LinkedIn</a>, I would love to chat!</p>
        </div>
        <div id="skills">
          <h3>Skills</h3>
          <ul>
            <li>Front-end development in React.js using HTML and CSS</li>
            <li>RESTful API development in Python and the Flask microframework</li>
            <li>Software development in C#, C++, Java, and Qt</li>
            <li>UI development in React or Qt Markup Language (QML)</li>
            <li>Proficient in Agile methodologies and Git workflows</li>
          </ul>
        </div>
        <div id="education">
          <h3>Education</h3>
          <p><b>Cedarville University</b><br />
          Bachelor of Science, GPA 3.99.<br />
          Double Majors in Computer Science, Information Technology Management</p>
        </div>
      </div>
    </section>
  )
}