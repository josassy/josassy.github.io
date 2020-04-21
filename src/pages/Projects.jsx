import React from 'react';
import projectsData from './projects-data';

export const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      {projectsData.map(item => (
      <a key={item.url} href={item.url}>
        <div className="card">

          <img src={item["image-url"]} alt={`Screenshot of ${item.title}`}/>
          <div>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p className="caption">{item.date}</p>
          </div>
        </div>
      </a>
      ))}
    </>
  )
}