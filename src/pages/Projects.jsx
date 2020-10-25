import React from 'react';
import projectsData from './projects-data';

export const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      {projectsData.map(({title, description, date, url, src}) => (
      <a key={url} href={url} className="card">
        {/* workaround for Chrome flex image bug: https://www.freecodecamp.org/forum/t/flex-basis-wont-shrink-image-in-flexbox/255701*/}
        <div className="image-container">
          <img src={src} alt={`Screenshot of ${title}`}/>
        </div>
        <div className="description">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="caption">{date}</p>
        </div>
      </a>
      ))}
    </section>
  )
}