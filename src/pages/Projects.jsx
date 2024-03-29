import React from 'react';
import { ProjectCard } from '../components/';

export const Projects = () => {
  return (
    <section id="projects">
      <div className="section-content">
        <h2>Projects</h2>
        <ProjectCard
          title="colorweaver"
          description={"colorweaver is an experiment in React with HTML5 Canvas and WebGL that revolves through the HSL space and generates expanding circles around the user's mouse, creating a 3D tunnel effect.\nWarning: Do not view if you are sensitive to bright, changing colors."}
          url="https://colorweaver.josiahlansford.com"
          src="/images/projects/colorweaver/1.png"
          images={[
            "/images/projects/colorweaver/1.png",
            "/images/projects/colorweaver/2.png",
            "/images/projects/colorweaver/3.png"
          ]}
        />
        <ProjectCard
          title="Timshol"
          description="Timshol is a 2.5D side-scroller platformer video game built in Unreal Engine 4. The game is designed with simple but fun mechanics to provide the player with an engaging and seamless experience that builds from the well-known platformer game format. Created in partial fulfillment of requirements for my university's senior-year capstone program."
          url="https://jebbishop.itch.io/timshol"
          src="/images/projects/timshol/3.png"
          images={[
            "/images/projects/timshol/1.png",
            "/images/projects/timshol/2.png",
            "/images/projects/timshol/3.png"
          ]}
        />
        <ProjectCard
          title="TeamDynamix Service Counter Kiosk"
          description="Web-based check-in kiosk built for Cedarville University's Information Technology department. Built using a React front-end and a Python Flask API, and integrated with existing TeamDynamix ticket-management system."
          src="/images/projects/tdxservicecounter/1.png"
          images={[
            "/images/projects/tdxservicecounter/1.png",
            "/images/projects/tdxservicecounter/2.png",
            "/images/projects/tdxservicecounter/3.png",
            "/images/projects/tdxservicecounter/4.png",
            "/images/projects/tdxservicecounter/5.png"
          ]}
        />
        <ProjectCard
          title="GameStonks"
          description="Beat your opponent in 2-player local play to make the most money from GameStonks stock! Built with Unreal Engine 4 in 48 hours for the 2021 Global Game Jam."
          url="https://josassy.itch.io/gamestonks"
          src="/images/projects/gamestonks/1.png"
          images={[
            "/images/projects/gamestonks/1.png",
            "/images/projects/gamestonks/2.png",
            "/images/projects/gamestonks/3.png"
          ]}
        />
        <ProjectCard
          title="Rocket Oblivion"
          description="Casual rocket-themed resource management game with an interactive soundtrack. Built with Godot Game Engine in 48 hours for the 2020 Global Game Jam."
          url="https://globalgamejam.org/2020/games/rocket-oblivion-4"
          src="/images/projects/rocketoblivion/1.png"
          images={[
            "/images/projects/rocketoblivion/1.png",
            "/images/projects/rocketoblivion/2.png",
            "/images/projects/rocketoblivion/3.png"
          ]}
        />
        <ProjectCard
          title="React Cache Simulator"
          description="Simple 2-way set associative cache simulator built using React. Created for Computer Architecture class at Cedarville University."
          url="https://josassy.github.io/cache-simulator"
          src="/images/projects/cache-simulator-800.png"
        />
      </div>
    </section>
  )
}