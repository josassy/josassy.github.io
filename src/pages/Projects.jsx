import React from 'react';
import { ProjectCard } from '../components/';

export const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <ProjectCard 
        title="TeamDynamix Service Counter Kiosk"
        description="Web-based check-in kiosk built for Cedarville University's Information Technology department. Built using a React front-end and a Python Flask API, and integrated with existing TeamDynamix ticket-management system."
        date="August 2020"
        src="/images/projects/tdxservicecounter/1.png"
        action="View Gallery"
        images={
          [
            { url: "/images/projects/tdxservicecounter/1.png"},
            { url: "/images/projects/tdxservicecounter/2.png"},
            { url: "/images/projects/tdxservicecounter/3.png"},
            { url: "/images/projects/tdxservicecounter/4.png"},
            { url: "/images/projects/tdxservicecounter/5.png"}
          ]
        }
      />
      <ProjectCard
        title="React Cache Simulator"
        description="Simple 2-way set associative cache simulator built using React. Created for Computer Architecture class at Cedarville University."
        date="April 2020"
        url="https://josassy.github.io/cache-simulator"
        src="/images/projects/cache-simulator-800.png"
        action="View Site"
      />
    </section>
  )
}