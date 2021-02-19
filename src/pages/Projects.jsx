import React from 'react';
import { ProjectCard } from '../components/';

export const Projects = () => {
  return (
    <section id="projects">
      <div className="section-content">
        <h2>Projects</h2>
        <ProjectCard
          title="GameStonks"
          description="Beat your opponent in 2-player local play to make the most money from GameStonks stonk! Built in 48 hours for the 2021 Global Game Jam."
          date="January 2021"
          url="https://josassy.itch.io/gamestonks"
          src="/images/projects/gamestonks/1.png"
          images={[
            "/images/projects/gamestonks/1.png",
            "/images/projects/gamestonks/2.png",
            "/images/projects/gamestonks/3.png"
          ]}
        />
        <ProjectCard
          title="TeamDynamix Service Counter Kiosk"
          description="Web-based check-in kiosk built for Cedarville University's Information Technology department. Built using a React front-end and a Python Flask API, and integrated with existing TeamDynamix ticket-management system."
          date="August 2020"
          src="/images/projects/tdxservicecounter/1.png"
          images={
            [
              "/images/projects/tdxservicecounter/1.png",
              "/images/projects/tdxservicecounter/2.png",
              "/images/projects/tdxservicecounter/3.png",
              "/images/projects/tdxservicecounter/4.png",
              "/images/projects/tdxservicecounter/5.png"
            ]
          }
        />
        <ProjectCard
          title="React Cache Simulator"
          description="Simple 2-way set associative cache simulator built using React. Created for Computer Architecture class at Cedarville University."
          date="April 2020"
          url="https://josassy.github.io/cache-simulator"
          src="/images/projects/cache-simulator-800.png"
        />
      </div>
    </section>
  )
}